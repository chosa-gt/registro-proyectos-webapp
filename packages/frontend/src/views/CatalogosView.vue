<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Catálogos</h2>

    <div v-if="store.loading" class="text-gray-500">Cargando...</div>
    <div v-else-if="store.error" class="text-red-500">{{ store.error }}</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Roles -->
      <CatalogoTable
        title="Roles"
        label-campo="Nombre"
        :items="store.roles.map((r) => ({ id: r.id_rol, nombre: r.nombre }))"
        @agregar="abrirModal('rol')"
        @editar="(item) => abrirEditar('rol', item)"
        @eliminar="(id) => eliminar('rol', id)"
      />

      <!-- Estados Cliente -->
      <CatalogoTable
        title="Estados de Cliente"
        label-campo="Estado"
        :items="
          store.estadosCliente.map((e) => ({
            id: e.id_estado_cliente,
            nombre: e.estado,
          }))
        "
        @agregar="abrirModal('estadoCliente')"
        @editar="(item) => abrirEditar('estadoCliente', item)"
        @eliminar="(id) => eliminar('estadoCliente', id)"
      />

      <!-- Estados Proyecto -->
      <CatalogoTable
        title="Estados de Proyecto"
        label-campo="Estado"
        :items="
          store.estadosProyecto.map((e) => ({
            id: e.id_estado_proyecto,
            nombre: e.estado,
          }))
        "
        @agregar="abrirModal('estadoProyecto')"
        @editar="(item) => abrirEditar('estadoProyecto', item)"
        @eliminar="(id) => eliminar('estadoProyecto', id)"
      />

      <!-- Prioridades -->
      <CatalogoTable
        title="Prioridades"
        label-campo="Nombre"
        :items="
          store.prioridades.map((p) => ({
            id: p.id_prioridad,
            nombre: p.nombre_prioridad,
          }))
        "
        @agregar="abrirModal('prioridad')"
        @editar="(item) => abrirEditar('prioridad', item)"
        @eliminar="(id) => eliminar('prioridad', id)"
      />

      <!-- Empresas -->
      <CatalogoTable
        title="Empresas"
        label-campo="Nombre"
        :items="
          store.empresas.map((e) => ({ id: e.id_empresa, nombre: e.nombre }))
        "
        @agregar="abrirModal('empresa')"
        @editar="(item) => abrirEditar('empresa', item)"
        @eliminar="(id) => eliminar('empresa', id)"
      />
    </div>

    <!-- Modal -->
    <ModalForm v-if="modal.visible" :title="modal.title" @close="cerrarModal">
      <div class="space-y-4">
        <div>
          <label class="block text-sm text-gray-600 mb-1">{{
            modal.label
          }}</label>
          <input
            v-model="modal.valor"
            type="text"
            class="form-input"
            :placeholder="modal.label"
          />
        </div>
        <div v-if="modal.tipo === 'empresa'">
          <label class="block text-sm text-gray-600 mb-1">Dirección</label>
          <input
            v-model="modal.direccion"
            type="text"
            class="form-input"
            placeholder="Dirección"
          />
        </div>
        <div class="flex justify-end gap-2">
          <button
            @click="cerrarModal"
            class="px-4 py-2 text-sm text-gray-600 hover:underline"
          >
            Cancelar
          </button>
          <button
            @click="guardar"
            class="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
          >
            Guardar
          </button>
        </div>
      </div>
    </ModalForm>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useCatalogoStore } from "../stores/catalogo.store";
import { CatalogoService } from "../services/catalogo.service";
import CatalogoTable from "../components/ui/CatalogoTable.vue";
import ModalForm from "../components/ui/ModalForm.vue";

const store = useCatalogoStore();

onMounted(() => store.fetchAll());

const modal = reactive({
  visible: false,
  tipo: "",
  title: "",
  label: "",
  valor: "",
  direccion: "",
  editId: null as number | null,
});

const abrirModal = (tipo: string) => {
  modal.tipo = tipo;
  modal.visible = true;
  modal.editId = null;
  modal.valor = "";
  modal.direccion = "";
  const titulos: Record<string, [string, string]> = {
    rol: ["Nuevo Rol", "Nombre del rol"],
    estadoCliente: ["Nuevo Estado de Cliente", "Estado"],
    estadoProyecto: ["Nuevo Estado de Proyecto", "Estado"],
    prioridad: ["Nueva Prioridad", "Nombre de prioridad"],
    empresa: ["Nueva Empresa", "Nombre de empresa"],
  };
  modal.title = titulos[tipo][0];
  modal.label = titulos[tipo][1];
};

const abrirEditar = (tipo: string, item: { id: number; nombre: string }) => {
  abrirModal(tipo);
  modal.editId = item.id;
  modal.valor = item.nombre;
  modal.title = modal.title
    .replace("Nuevo", "Editar")
    .replace("Nueva", "Editar");
};

const cerrarModal = () => {
  modal.visible = false;
};

const guardar = async () => {
  const v = modal.valor.trim();
  if (!v) return;
  const id = modal.editId;

  try {
    if (modal.tipo === "rol") {
      id
        ? await CatalogoService.updateRol(id, v)
        : await CatalogoService.createRol(v);
      await store.fetchRoles();
    } else if (modal.tipo === "estadoCliente") {
      id
        ? await CatalogoService.updateEstadoCliente(id, v)
        : await CatalogoService.createEstadoCliente(v);
      await store.fetchEstadosCliente();
    } else if (modal.tipo === "estadoProyecto") {
      id
        ? await CatalogoService.updateEstadoProyecto(id, v)
        : await CatalogoService.createEstadoProyecto(v);
      await store.fetchEstadosProyecto();
    } else if (modal.tipo === "prioridad") {
      id
        ? await CatalogoService.updatePrioridad(id, v)
        : await CatalogoService.createPrioridad(v);
      await store.fetchPrioridades();
    } else if (modal.tipo === "empresa") {
      const data = { nombre: v, direccion: modal.direccion || undefined };
      id
        ? await CatalogoService.updateEmpresa(id, data)
        : await CatalogoService.createEmpresa(data);
      await store.fetchEmpresas();
    }
    cerrarModal();
  } catch (e) {
    alert("Error al guardar");
  }
};

const eliminar = async (tipo: string, id: number) => {
  if (!confirm("¿Estás seguro de eliminar este registro?")) return;
  try {
    if (tipo === "rol") {
      await CatalogoService.deleteRol(id);
      await store.fetchRoles();
    } else if (tipo === "estadoCliente") {
      await CatalogoService.deleteEstadoCliente(id);
      await store.fetchEstadosCliente();
    } else if (tipo === "estadoProyecto") {
      await CatalogoService.deleteEstadoProyecto(id);
      await store.fetchEstadosProyecto();
    } else if (tipo === "prioridad") {
      await CatalogoService.deletePrioridad(id);
      await store.fetchPrioridades();
    } else if (tipo === "empresa") {
      await CatalogoService.deleteEmpresa(id);
      await store.fetchEmpresas();
    }
  } catch (e) {
    alert("Error al eliminar");
  }
};
</script>
