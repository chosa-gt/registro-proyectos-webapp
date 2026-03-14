<template>
  <div>
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Proyectos</h2>
      <button @click="abrirModal()" class="btn-primary">
        + Nuevo Proyecto
      </button>
    </div>

    <!-- Buscador -->
    <div class="card mb-6">
      <input
        v-model="busqueda"
        type="text"
        class="form-input"
        placeholder="Buscar por No. Proyecto, nombre o cliente..."
      />
    </div>

    <!-- Loading / Error -->
    <div v-if="store.loading" class="text-gray-500 text-center py-10">
      Cargando...
    </div>
    <div v-else-if="store.error" class="text-red-500 text-center py-10">
      {{ store.error }}
    </div>

    <!-- Tabla -->
    <div v-else class="card">
      <div
        v-if="proyectosFiltrados.length === 0"
        class="text-gray-400 text-center py-8"
      >
        No hay proyectos registrados.
      </div>
      <table v-else class="w-full text-sm">
        <thead>
          <tr class="text-left text-gray-500 border-b">
            <th class="pb-3">No. Proyecto</th>
            <th class="pb-3">Nombre</th>
            <th class="pb-3">Cliente</th>
            <th class="pb-3">Consultor</th>
            <th class="pb-3">Estado</th>
            <th class="pb-3">Monto Actual</th>
            <th class="pb-3 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="p in proyectosFiltrados"
            :key="p.id_proyecto"
            class="border-b last:border-0 hover:bg-gray-50"
          >
            <td class="py-3 font-mono font-medium text-blue-600">
              {{ p.no_proyecto }}
            </td>
            <td class="py-3">{{ p.nombre || "—" }}</td>
            <td class="py-3">
              {{ p.cliente.nombre }} {{ p.cliente.apellido }}
            </td>
            <td class="py-3">{{ p.consultor.nombre }}</td>
            <td class="py-3">
              <span :class="badgeEstado(p.estado_proyecto.estado)">
                {{ p.estado_proyecto.estado }}
              </span>
            </td>
            <td class="py-3">
              {{ p.log_montos[0] ? formatMonto(p.log_montos[0].monto) : "—" }}
            </td>
            <td class="py-3 text-right space-x-2">
              <button
                @click="verDetalle(p.id_proyecto)"
                class="text-blue-600 hover:underline text-xs"
              >
                Ver
              </button>
              <button
                @click="abrirModal(p)"
                class="text-yellow-600 hover:underline text-xs"
              >
                Editar
              </button>
              <button
                @click="eliminar(p.id_proyecto)"
                class="text-red-500 hover:underline text-xs"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Crear/Editar -->
    <ModalForm v-if="modal.visible" :title="modal.title" @close="cerrarModal">
      <div class="space-y-3">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="form-label">No. Proyecto *</label>
            <input
              v-model="form.no_proyecto"
              type="text"
              class="form-input"
              placeholder="Ej: 20130012"
            />
          </div>
          <div>
            <label class="form-label">Nombre</label>
            <input
              v-model="form.nombre"
              type="text"
              class="form-input"
              placeholder="Nombre del proyecto"
            />
          </div>
        </div>

        <div>
          <label class="form-label">Descripción</label>
          <textarea
            v-model="form.descripcion"
            class="form-textarea"
            rows="2"
            placeholder="Descripción del proyecto"
          ></textarea>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="form-label">Fecha Inicio *</label>
            <input v-model="form.fecha_inicio" type="date" class="form-input" />
          </div>
          <div>
            <label class="form-label">Fecha Fin</label>
            <input v-model="form.fecha_fin" type="date" class="form-input" />
          </div>
        </div>

        <div>
          <label class="form-label">Cliente *</label>
          <select v-model="form.id_cliente" class="form-select">
            <option value="">Seleccione un cliente</option>
            <option
              v-for="c in clientes"
              :key="c.id_cliente"
              :value="c.id_cliente"
            >
              {{ c.nombre }} {{ c.apellido }}
            </option>
          </select>
        </div>

        <div>
          <label class="form-label">Consultor *</label>
          <select v-model="form.id_consultor" class="form-select">
            <option value="">Seleccione un consultor</option>
            <option
              v-for="c in consultores"
              :key="c.id_consultor"
              :value="c.id_consultor"
            >
              {{ c.nombre }}
            </option>
          </select>
        </div>

        <div>
          <label class="form-label">Estado *</label>
          <select v-model="form.id_estado_proyecto" class="form-select">
            <option value="">Seleccione un estado</option>
            <option
              v-for="e in estadosProyecto"
              :key="e.id_estado_proyecto"
              :value="e.id_estado_proyecto"
            >
              {{ e.estado }}
            </option>
          </select>
        </div>

        <div v-if="!modal.editId">
          <label class="form-label">Monto Inicial *</label>
          <input
            v-model="form.monto"
            type="number"
            class="form-input"
            placeholder="0.00"
          />
        </div>

        <div class="flex justify-end gap-2 pt-2">
          <button @click="cerrarModal" class="btn-secondary">Cancelar</button>
          <button @click="guardar" class="btn-primary">Guardar</button>
        </div>
      </div>
    </ModalForm>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useProyectoStore } from "../stores/proyecto.store";
import { useCatalogoStore } from "../stores/catalogo.store";
import { ProyectoService } from "../services/proyecto.service";
import { ClienteService } from "../services/cliente.service";
import { ConsultorService } from "../services/consultor.service";
import ModalForm from "../components/ui/ModalForm.vue";
import type { Cliente, Consultor, EstadoProyecto, Proyecto } from "../types";

const router = useRouter();
const store = useProyectoStore();
const catalogoStore = useCatalogoStore();

const clientes = ref<Cliente[]>([]);
const consultores = ref<Consultor[]>([]);
const estadosProyecto = ref<EstadoProyecto[]>([]);
const busqueda = ref("");

const form = reactive({
  no_proyecto: "",
  nombre: "",
  descripcion: "",
  fecha_inicio: "",
  fecha_fin: "",
  id_cliente: "" as number | "",
  id_consultor: "" as number | "",
  id_estado_proyecto: "" as number | "",
  monto: "" as number | "",
});

const modal = reactive({
  visible: false,
  title: "",
  editId: null as number | null,
});

const proyectosFiltrados = computed(() => {
  if (!busqueda.value) return store.proyectos;
  const q = busqueda.value.toLowerCase();
  return store.proyectos.filter(
    (p) =>
      p.no_proyecto.toLowerCase().includes(q) ||
      p.nombre?.toLowerCase().includes(q) ||
      p.cliente.nombre.toLowerCase().includes(q),
  );
});

const badgeEstado = (estado: string) => {
  const e = estado.toLowerCase();
  if (e.includes("abierto")) return "badge-abierto";
  if (e.includes("suspendido")) return "badge-suspendido";
  if (e.includes("finalizado")) return "badge-finalizado";
  return "inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600";
};

const formatMonto = (monto: number) => {
  return new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
  }).format(monto);
};

const verDetalle = (id: number) => {
  router.push(`/proyectos/${id}`);
};

const abrirModal = async (proyecto?: Proyecto) => {
  modal.visible = true;
  if (proyecto) {
    modal.title = "Editar Proyecto";
    modal.editId = proyecto.id_proyecto;
    form.no_proyecto = proyecto.no_proyecto;
    form.nombre = proyecto.nombre || "";
    form.descripcion = proyecto.descripcion || "";
    form.fecha_inicio = proyecto.fecha_inicio?.split("T")[0] ?? "";
    form.fecha_fin = proyecto.fecha_fin?.split("T")[0] || "";
    form.id_cliente = proyecto.cliente.id_cliente;
    form.id_consultor = proyecto.consultor.id_consultor;
    form.id_estado_proyecto = proyecto.estado_proyecto.id_estado_proyecto;
  } else {
    modal.title = "Nuevo Proyecto";
    modal.editId = null;
    form.no_proyecto = "";
    form.nombre = "";
    form.descripcion = "";
    form.fecha_inicio = "";
    form.fecha_fin = "";
    form.id_cliente = "";
    form.id_consultor = "";
    form.id_estado_proyecto = "";
    form.monto = "";
  }
};

const cerrarModal = () => {
  modal.visible = false;
};

const guardar = async () => {
  if (
    !form.no_proyecto ||
    !form.fecha_inicio ||
    !form.id_cliente ||
    !form.id_consultor ||
    !form.id_estado_proyecto
  ) {
    alert("Por favor completa los campos obligatorios");
    return;
  }

  try {
    const payload = {
      no_proyecto: form.no_proyecto,
      nombre: form.nombre || undefined,
      descripcion: form.descripcion || undefined,
      fecha_inicio: form.fecha_inicio,
      fecha_fin: form.fecha_fin || undefined,
      id_cliente: Number(form.id_cliente),
      id_consultor: Number(form.id_consultor),
      id_estado_proyecto: Number(form.id_estado_proyecto),
    };

    if (modal.editId) {
      await ProyectoService.updateProyecto(modal.editId, payload);
    } else {
      const res = await ProyectoService.createProyecto(payload);
      // Registrar monto inicial
      if (form.monto) {
        await import("../services/logMonto.service").then((m) =>
          m.LogMontoService.createLogMonto({
            monto: Number(form.monto),
            fecha: form.fecha_inicio,
            id_proyecto: res.data.id_proyecto,
            id_usuario: 1, // temporal hasta tener auth
          }),
        );
      }
    }
    cerrarModal();
    await store.fetchProyectos();
  } catch (error: any) {
    if (error?.response?.data?.error) {
      alert(`Error: ${error.response.data.error}`)
    } else {
      alert('Error al guardar proyecto')
    }
  }
};

const eliminar = async (id: number) => {
  if (!confirm("¿Estás seguro de eliminar este proyecto?")) return;
  try {
    await ProyectoService.deleteProyecto(id);
    await store.fetchProyectos();
  } catch (e) {
    alert("Error al eliminar proyecto");
  }
};

onMounted(async () => {
  await store.fetchProyectos();
  await catalogoStore.fetchEstadosProyecto();
  const [c, cons] = await Promise.all([
    ClienteService.getClientes(),
    ConsultorService.getConsultores(),
  ]);
  clientes.value = c.data;
  consultores.value = cons.data;
  estadosProyecto.value = catalogoStore.estadosProyecto;
});
</script>
