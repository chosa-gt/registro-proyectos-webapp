
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model EstadoCliente
 * 
 */
export type EstadoCliente = $Result.DefaultSelection<Prisma.$EstadoClientePayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Consultor
 * 
 */
export type Consultor = $Result.DefaultSelection<Prisma.$ConsultorPayload>
/**
 * Model EstadoProyecto
 * 
 */
export type EstadoProyecto = $Result.DefaultSelection<Prisma.$EstadoProyectoPayload>
/**
 * Model Proyecto
 * 
 */
export type Proyecto = $Result.DefaultSelection<Prisma.$ProyectoPayload>
/**
 * Model Prioridad
 * 
 */
export type Prioridad = $Result.DefaultSelection<Prisma.$PrioridadPayload>
/**
 * Model Bitacora
 * 
 */
export type Bitacora = $Result.DefaultSelection<Prisma.$BitacoraPayload>
/**
 * Model LogMontoProyecto
 * 
 */
export type LogMontoProyecto = $Result.DefaultSelection<Prisma.$LogMontoProyectoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Rols
 * const rols = await prisma.rol.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Rols
   * const rols = await prisma.rol.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estadoCliente`: Exposes CRUD operations for the **EstadoCliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstadoClientes
    * const estadoClientes = await prisma.estadoCliente.findMany()
    * ```
    */
  get estadoCliente(): Prisma.EstadoClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultor`: Exposes CRUD operations for the **Consultor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultors
    * const consultors = await prisma.consultor.findMany()
    * ```
    */
  get consultor(): Prisma.ConsultorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estadoProyecto`: Exposes CRUD operations for the **EstadoProyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstadoProyectos
    * const estadoProyectos = await prisma.estadoProyecto.findMany()
    * ```
    */
  get estadoProyecto(): Prisma.EstadoProyectoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proyecto`: Exposes CRUD operations for the **Proyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proyectos
    * const proyectos = await prisma.proyecto.findMany()
    * ```
    */
  get proyecto(): Prisma.ProyectoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prioridad`: Exposes CRUD operations for the **Prioridad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prioridads
    * const prioridads = await prisma.prioridad.findMany()
    * ```
    */
  get prioridad(): Prisma.PrioridadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bitacora`: Exposes CRUD operations for the **Bitacora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bitacoras
    * const bitacoras = await prisma.bitacora.findMany()
    * ```
    */
  get bitacora(): Prisma.BitacoraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logMontoProyecto`: Exposes CRUD operations for the **LogMontoProyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogMontoProyectos
    * const logMontoProyectos = await prisma.logMontoProyecto.findMany()
    * ```
    */
  get logMontoProyecto(): Prisma.LogMontoProyectoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Rol: 'Rol',
    Usuario: 'Usuario',
    Empresa: 'Empresa',
    EstadoCliente: 'EstadoCliente',
    Cliente: 'Cliente',
    Consultor: 'Consultor',
    EstadoProyecto: 'EstadoProyecto',
    Proyecto: 'Proyecto',
    Prioridad: 'Prioridad',
    Bitacora: 'Bitacora',
    LogMontoProyecto: 'LogMontoProyecto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "rol" | "usuario" | "empresa" | "estadoCliente" | "cliente" | "consultor" | "estadoProyecto" | "proyecto" | "prioridad" | "bitacora" | "logMontoProyecto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      EstadoCliente: {
        payload: Prisma.$EstadoClientePayload<ExtArgs>
        fields: Prisma.EstadoClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload>
          }
          findFirst: {
            args: Prisma.EstadoClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload>
          }
          findMany: {
            args: Prisma.EstadoClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload>[]
          }
          create: {
            args: Prisma.EstadoClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload>
          }
          createMany: {
            args: Prisma.EstadoClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadoClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload>[]
          }
          delete: {
            args: Prisma.EstadoClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload>
          }
          update: {
            args: Prisma.EstadoClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload>
          }
          deleteMany: {
            args: Prisma.EstadoClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstadoClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload>[]
          }
          upsert: {
            args: Prisma.EstadoClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoClientePayload>
          }
          aggregate: {
            args: Prisma.EstadoClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstadoCliente>
          }
          groupBy: {
            args: Prisma.EstadoClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoClienteCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoClienteCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Consultor: {
        payload: Prisma.$ConsultorPayload<ExtArgs>
        fields: Prisma.ConsultorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload>
          }
          findFirst: {
            args: Prisma.ConsultorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload>
          }
          findMany: {
            args: Prisma.ConsultorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload>[]
          }
          create: {
            args: Prisma.ConsultorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload>
          }
          createMany: {
            args: Prisma.ConsultorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload>[]
          }
          delete: {
            args: Prisma.ConsultorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload>
          }
          update: {
            args: Prisma.ConsultorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload>
          }
          deleteMany: {
            args: Prisma.ConsultorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload>[]
          }
          upsert: {
            args: Prisma.ConsultorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorPayload>
          }
          aggregate: {
            args: Prisma.ConsultorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultor>
          }
          groupBy: {
            args: Prisma.ConsultorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultorCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultorCountAggregateOutputType> | number
          }
        }
      }
      EstadoProyecto: {
        payload: Prisma.$EstadoProyectoPayload<ExtArgs>
        fields: Prisma.EstadoProyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoProyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoProyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload>
          }
          findFirst: {
            args: Prisma.EstadoProyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoProyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload>
          }
          findMany: {
            args: Prisma.EstadoProyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload>[]
          }
          create: {
            args: Prisma.EstadoProyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload>
          }
          createMany: {
            args: Prisma.EstadoProyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadoProyectoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload>[]
          }
          delete: {
            args: Prisma.EstadoProyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload>
          }
          update: {
            args: Prisma.EstadoProyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload>
          }
          deleteMany: {
            args: Prisma.EstadoProyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoProyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstadoProyectoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload>[]
          }
          upsert: {
            args: Prisma.EstadoProyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoProyectoPayload>
          }
          aggregate: {
            args: Prisma.EstadoProyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstadoProyecto>
          }
          groupBy: {
            args: Prisma.EstadoProyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoProyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoProyectoCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoProyectoCountAggregateOutputType> | number
          }
        }
      }
      Proyecto: {
        payload: Prisma.$ProyectoPayload<ExtArgs>
        fields: Prisma.ProyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          findFirst: {
            args: Prisma.ProyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          findMany: {
            args: Prisma.ProyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>[]
          }
          create: {
            args: Prisma.ProyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          createMany: {
            args: Prisma.ProyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProyectoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>[]
          }
          delete: {
            args: Prisma.ProyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          update: {
            args: Prisma.ProyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          deleteMany: {
            args: Prisma.ProyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProyectoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>[]
          }
          upsert: {
            args: Prisma.ProyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          aggregate: {
            args: Prisma.ProyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProyecto>
          }
          groupBy: {
            args: Prisma.ProyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProyectoCountArgs<ExtArgs>
            result: $Utils.Optional<ProyectoCountAggregateOutputType> | number
          }
        }
      }
      Prioridad: {
        payload: Prisma.$PrioridadPayload<ExtArgs>
        fields: Prisma.PrioridadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrioridadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrioridadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload>
          }
          findFirst: {
            args: Prisma.PrioridadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrioridadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload>
          }
          findMany: {
            args: Prisma.PrioridadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload>[]
          }
          create: {
            args: Prisma.PrioridadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload>
          }
          createMany: {
            args: Prisma.PrioridadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrioridadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload>[]
          }
          delete: {
            args: Prisma.PrioridadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload>
          }
          update: {
            args: Prisma.PrioridadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload>
          }
          deleteMany: {
            args: Prisma.PrioridadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrioridadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrioridadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload>[]
          }
          upsert: {
            args: Prisma.PrioridadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioridadPayload>
          }
          aggregate: {
            args: Prisma.PrioridadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrioridad>
          }
          groupBy: {
            args: Prisma.PrioridadGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrioridadGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrioridadCountArgs<ExtArgs>
            result: $Utils.Optional<PrioridadCountAggregateOutputType> | number
          }
        }
      }
      Bitacora: {
        payload: Prisma.$BitacoraPayload<ExtArgs>
        fields: Prisma.BitacoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BitacoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BitacoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          findFirst: {
            args: Prisma.BitacoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BitacoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          findMany: {
            args: Prisma.BitacoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>[]
          }
          create: {
            args: Prisma.BitacoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          createMany: {
            args: Prisma.BitacoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BitacoraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>[]
          }
          delete: {
            args: Prisma.BitacoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          update: {
            args: Prisma.BitacoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          deleteMany: {
            args: Prisma.BitacoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BitacoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BitacoraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>[]
          }
          upsert: {
            args: Prisma.BitacoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          aggregate: {
            args: Prisma.BitacoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBitacora>
          }
          groupBy: {
            args: Prisma.BitacoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<BitacoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.BitacoraCountArgs<ExtArgs>
            result: $Utils.Optional<BitacoraCountAggregateOutputType> | number
          }
        }
      }
      LogMontoProyecto: {
        payload: Prisma.$LogMontoProyectoPayload<ExtArgs>
        fields: Prisma.LogMontoProyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogMontoProyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogMontoProyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload>
          }
          findFirst: {
            args: Prisma.LogMontoProyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogMontoProyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload>
          }
          findMany: {
            args: Prisma.LogMontoProyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload>[]
          }
          create: {
            args: Prisma.LogMontoProyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload>
          }
          createMany: {
            args: Prisma.LogMontoProyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogMontoProyectoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload>[]
          }
          delete: {
            args: Prisma.LogMontoProyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload>
          }
          update: {
            args: Prisma.LogMontoProyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload>
          }
          deleteMany: {
            args: Prisma.LogMontoProyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogMontoProyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogMontoProyectoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload>[]
          }
          upsert: {
            args: Prisma.LogMontoProyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogMontoProyectoPayload>
          }
          aggregate: {
            args: Prisma.LogMontoProyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogMontoProyecto>
          }
          groupBy: {
            args: Prisma.LogMontoProyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogMontoProyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogMontoProyectoCountArgs<ExtArgs>
            result: $Utils.Optional<LogMontoProyectoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    rol?: RolOmit
    usuario?: UsuarioOmit
    empresa?: EmpresaOmit
    estadoCliente?: EstadoClienteOmit
    cliente?: ClienteOmit
    consultor?: ConsultorOmit
    estadoProyecto?: EstadoProyectoOmit
    proyecto?: ProyectoOmit
    prioridad?: PrioridadOmit
    bitacora?: BitacoraOmit
    logMontoProyecto?: LogMontoProyectoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    bitacoras: number
    log_montos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacoras?: boolean | UsuarioCountOutputTypeCountBitacorasArgs
    log_montos?: boolean | UsuarioCountOutputTypeCountLog_montosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountBitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitacoraWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLog_montosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogMontoProyectoWhereInput
  }


  /**
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    clientes: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | EmpresaCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }


  /**
   * Count Type EstadoClienteCountOutputType
   */

  export type EstadoClienteCountOutputType = {
    clientes: number
  }

  export type EstadoClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | EstadoClienteCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * EstadoClienteCountOutputType without action
   */
  export type EstadoClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoClienteCountOutputType
     */
    select?: EstadoClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoClienteCountOutputType without action
   */
  export type EstadoClienteCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    proyectos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyectos?: boolean | ClienteCountOutputTypeCountProyectosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountProyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProyectoWhereInput
  }


  /**
   * Count Type ConsultorCountOutputType
   */

  export type ConsultorCountOutputType = {
    proyectos: number
  }

  export type ConsultorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyectos?: boolean | ConsultorCountOutputTypeCountProyectosArgs
  }

  // Custom InputTypes
  /**
   * ConsultorCountOutputType without action
   */
  export type ConsultorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultorCountOutputType
     */
    select?: ConsultorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultorCountOutputType without action
   */
  export type ConsultorCountOutputTypeCountProyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProyectoWhereInput
  }


  /**
   * Count Type EstadoProyectoCountOutputType
   */

  export type EstadoProyectoCountOutputType = {
    proyectos: number
    bitacoras: number
  }

  export type EstadoProyectoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyectos?: boolean | EstadoProyectoCountOutputTypeCountProyectosArgs
    bitacoras?: boolean | EstadoProyectoCountOutputTypeCountBitacorasArgs
  }

  // Custom InputTypes
  /**
   * EstadoProyectoCountOutputType without action
   */
  export type EstadoProyectoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyectoCountOutputType
     */
    select?: EstadoProyectoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoProyectoCountOutputType without action
   */
  export type EstadoProyectoCountOutputTypeCountProyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProyectoWhereInput
  }

  /**
   * EstadoProyectoCountOutputType without action
   */
  export type EstadoProyectoCountOutputTypeCountBitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitacoraWhereInput
  }


  /**
   * Count Type ProyectoCountOutputType
   */

  export type ProyectoCountOutputType = {
    bitacoras: number
    log_montos: number
  }

  export type ProyectoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacoras?: boolean | ProyectoCountOutputTypeCountBitacorasArgs
    log_montos?: boolean | ProyectoCountOutputTypeCountLog_montosArgs
  }

  // Custom InputTypes
  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProyectoCountOutputType
     */
    select?: ProyectoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountBitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitacoraWhereInput
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountLog_montosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogMontoProyectoWhereInput
  }


  /**
   * Count Type PrioridadCountOutputType
   */

  export type PrioridadCountOutputType = {
    bitacoras: number
  }

  export type PrioridadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacoras?: boolean | PrioridadCountOutputTypeCountBitacorasArgs
  }

  // Custom InputTypes
  /**
   * PrioridadCountOutputType without action
   */
  export type PrioridadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioridadCountOutputType
     */
    select?: PrioridadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrioridadCountOutputType without action
   */
  export type PrioridadCountOutputTypeCountBitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitacoraWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id_rol: number | null
  }

  export type RolSumAggregateOutputType = {
    id_rol: number | null
  }

  export type RolMinAggregateOutputType = {
    id_rol: number | null
    nombre: string | null
  }

  export type RolMaxAggregateOutputType = {
    id_rol: number | null
    nombre: string | null
  }

  export type RolCountAggregateOutputType = {
    id_rol: number
    nombre: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id_rol?: true
  }

  export type RolSumAggregateInputType = {
    id_rol?: true
  }

  export type RolMinAggregateInputType = {
    id_rol?: true
    nombre?: true
  }

  export type RolMaxAggregateInputType = {
    id_rol?: true
    nombre?: true
  }

  export type RolCountAggregateInputType = {
    id_rol?: true
    nombre?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id_rol: number
    nombre: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id_rol?: boolean
    nombre?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rol" | "nombre", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: number
      nombre: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.createManyAndReturn({
     *   select: { id_rol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id_rol: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id_rol: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    contrasena: string | null
    activo: boolean | null
    id_rol: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    contrasena: string | null
    activo: boolean | null
    id_rol: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    apellido: number
    correo: number
    contrasena: number
    activo: number
    id_rol: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    correo?: true
    contrasena?: true
    activo?: true
    id_rol?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    correo?: true
    contrasena?: true
    activo?: true
    id_rol?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    correo?: true
    contrasena?: true
    activo?: true
    id_rol?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo: boolean
    id_rol: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrasena?: boolean
    activo?: boolean
    id_rol?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    consultor?: boolean | Usuario$consultorArgs<ExtArgs>
    bitacoras?: boolean | Usuario$bitacorasArgs<ExtArgs>
    log_montos?: boolean | Usuario$log_montosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrasena?: boolean
    activo?: boolean
    id_rol?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrasena?: boolean
    activo?: boolean
    id_rol?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    contrasena?: boolean
    activo?: boolean
    id_rol?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "apellido" | "correo" | "contrasena" | "activo" | "id_rol", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    consultor?: boolean | Usuario$consultorArgs<ExtArgs>
    bitacoras?: boolean | Usuario$bitacorasArgs<ExtArgs>
    log_montos?: boolean | Usuario$log_montosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      consultor: Prisma.$ConsultorPayload<ExtArgs> | null
      bitacoras: Prisma.$BitacoraPayload<ExtArgs>[]
      log_montos: Prisma.$LogMontoProyectoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      apellido: string
      correo: string
      contrasena: string
      activo: boolean
      id_rol: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consultor<T extends Usuario$consultorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$consultorArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bitacoras<T extends Usuario$bitacorasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    log_montos<T extends Usuario$log_montosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$log_montosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly id_rol: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.consultor
   */
  export type Usuario$consultorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    where?: ConsultorWhereInput
  }

  /**
   * Usuario.bitacoras
   */
  export type Usuario$bitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    where?: BitacoraWhereInput
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    cursor?: BitacoraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Usuario.log_montos
   */
  export type Usuario$log_montosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    where?: LogMontoProyectoWhereInput
    orderBy?: LogMontoProyectoOrderByWithRelationInput | LogMontoProyectoOrderByWithRelationInput[]
    cursor?: LogMontoProyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogMontoProyectoScalarFieldEnum | LogMontoProyectoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaAvgAggregateOutputType = {
    id_empresa: number | null
  }

  export type EmpresaSumAggregateOutputType = {
    id_empresa: number | null
  }

  export type EmpresaMinAggregateOutputType = {
    id_empresa: number | null
    nombre: string | null
    direccion: string | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id_empresa: number | null
    nombre: string | null
    direccion: string | null
  }

  export type EmpresaCountAggregateOutputType = {
    id_empresa: number
    nombre: number
    direccion: number
    _all: number
  }


  export type EmpresaAvgAggregateInputType = {
    id_empresa?: true
  }

  export type EmpresaSumAggregateInputType = {
    id_empresa?: true
  }

  export type EmpresaMinAggregateInputType = {
    id_empresa?: true
    nombre?: true
    direccion?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id_empresa?: true
    nombre?: true
    direccion?: true
  }

  export type EmpresaCountAggregateInputType = {
    id_empresa?: true
    nombre?: true
    direccion?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _avg?: EmpresaAvgAggregateInputType
    _sum?: EmpresaSumAggregateInputType
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id_empresa: number
    nombre: string
    direccion: string | null
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empresa?: boolean
    nombre?: boolean
    direccion?: boolean
    clientes?: boolean | Empresa$clientesArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empresa?: boolean
    nombre?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empresa?: boolean
    nombre?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id_empresa?: boolean
    nombre?: boolean
    direccion?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_empresa" | "nombre" | "direccion", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | Empresa$clientesArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      clientes: Prisma.$ClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_empresa: number
      nombre: string
      direccion: string | null
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id_empresa`
     * const empresaWithId_empresaOnly = await prisma.empresa.findMany({ select: { id_empresa: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id_empresa`
     * const empresaWithId_empresaOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id_empresa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id_empresa`
     * const empresaWithId_empresaOnly = await prisma.empresa.updateManyAndReturn({
     *   select: { id_empresa: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends Empresa$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id_empresa: FieldRef<"Empresa", 'Int'>
    readonly nombre: FieldRef<"Empresa", 'String'>
    readonly direccion: FieldRef<"Empresa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.clientes
   */
  export type Empresa$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model EstadoCliente
   */

  export type AggregateEstadoCliente = {
    _count: EstadoClienteCountAggregateOutputType | null
    _avg: EstadoClienteAvgAggregateOutputType | null
    _sum: EstadoClienteSumAggregateOutputType | null
    _min: EstadoClienteMinAggregateOutputType | null
    _max: EstadoClienteMaxAggregateOutputType | null
  }

  export type EstadoClienteAvgAggregateOutputType = {
    id_estado_cliente: number | null
  }

  export type EstadoClienteSumAggregateOutputType = {
    id_estado_cliente: number | null
  }

  export type EstadoClienteMinAggregateOutputType = {
    id_estado_cliente: number | null
    estado: string | null
  }

  export type EstadoClienteMaxAggregateOutputType = {
    id_estado_cliente: number | null
    estado: string | null
  }

  export type EstadoClienteCountAggregateOutputType = {
    id_estado_cliente: number
    estado: number
    _all: number
  }


  export type EstadoClienteAvgAggregateInputType = {
    id_estado_cliente?: true
  }

  export type EstadoClienteSumAggregateInputType = {
    id_estado_cliente?: true
  }

  export type EstadoClienteMinAggregateInputType = {
    id_estado_cliente?: true
    estado?: true
  }

  export type EstadoClienteMaxAggregateInputType = {
    id_estado_cliente?: true
    estado?: true
  }

  export type EstadoClienteCountAggregateInputType = {
    id_estado_cliente?: true
    estado?: true
    _all?: true
  }

  export type EstadoClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoCliente to aggregate.
     */
    where?: EstadoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoClientes to fetch.
     */
    orderBy?: EstadoClienteOrderByWithRelationInput | EstadoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstadoClientes
    **/
    _count?: true | EstadoClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoClienteMaxAggregateInputType
  }

  export type GetEstadoClienteAggregateType<T extends EstadoClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstadoCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstadoCliente[P]>
      : GetScalarType<T[P], AggregateEstadoCliente[P]>
  }




  export type EstadoClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoClienteWhereInput
    orderBy?: EstadoClienteOrderByWithAggregationInput | EstadoClienteOrderByWithAggregationInput[]
    by: EstadoClienteScalarFieldEnum[] | EstadoClienteScalarFieldEnum
    having?: EstadoClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoClienteCountAggregateInputType | true
    _avg?: EstadoClienteAvgAggregateInputType
    _sum?: EstadoClienteSumAggregateInputType
    _min?: EstadoClienteMinAggregateInputType
    _max?: EstadoClienteMaxAggregateInputType
  }

  export type EstadoClienteGroupByOutputType = {
    id_estado_cliente: number
    estado: string
    _count: EstadoClienteCountAggregateOutputType | null
    _avg: EstadoClienteAvgAggregateOutputType | null
    _sum: EstadoClienteSumAggregateOutputType | null
    _min: EstadoClienteMinAggregateOutputType | null
    _max: EstadoClienteMaxAggregateOutputType | null
  }

  type GetEstadoClienteGroupByPayload<T extends EstadoClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoClienteGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoClienteGroupByOutputType[P]>
        }
      >
    >


  export type EstadoClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_cliente?: boolean
    estado?: boolean
    clientes?: boolean | EstadoCliente$clientesArgs<ExtArgs>
    _count?: boolean | EstadoClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoCliente"]>

  export type EstadoClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_cliente?: boolean
    estado?: boolean
  }, ExtArgs["result"]["estadoCliente"]>

  export type EstadoClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_cliente?: boolean
    estado?: boolean
  }, ExtArgs["result"]["estadoCliente"]>

  export type EstadoClienteSelectScalar = {
    id_estado_cliente?: boolean
    estado?: boolean
  }

  export type EstadoClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estado_cliente" | "estado", ExtArgs["result"]["estadoCliente"]>
  export type EstadoClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | EstadoCliente$clientesArgs<ExtArgs>
    _count?: boolean | EstadoClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstadoClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstadoClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstadoClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstadoCliente"
    objects: {
      clientes: Prisma.$ClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estado_cliente: number
      estado: string
    }, ExtArgs["result"]["estadoCliente"]>
    composites: {}
  }

  type EstadoClienteGetPayload<S extends boolean | null | undefined | EstadoClienteDefaultArgs> = $Result.GetResult<Prisma.$EstadoClientePayload, S>

  type EstadoClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadoClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoClienteCountAggregateInputType | true
    }

  export interface EstadoClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstadoCliente'], meta: { name: 'EstadoCliente' } }
    /**
     * Find zero or one EstadoCliente that matches the filter.
     * @param {EstadoClienteFindUniqueArgs} args - Arguments to find a EstadoCliente
     * @example
     * // Get one EstadoCliente
     * const estadoCliente = await prisma.estadoCliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoClienteFindUniqueArgs>(args: SelectSubset<T, EstadoClienteFindUniqueArgs<ExtArgs>>): Prisma__EstadoClienteClient<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstadoCliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoClienteFindUniqueOrThrowArgs} args - Arguments to find a EstadoCliente
     * @example
     * // Get one EstadoCliente
     * const estadoCliente = await prisma.estadoCliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoClienteClient<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoCliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoClienteFindFirstArgs} args - Arguments to find a EstadoCliente
     * @example
     * // Get one EstadoCliente
     * const estadoCliente = await prisma.estadoCliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoClienteFindFirstArgs>(args?: SelectSubset<T, EstadoClienteFindFirstArgs<ExtArgs>>): Prisma__EstadoClienteClient<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoCliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoClienteFindFirstOrThrowArgs} args - Arguments to find a EstadoCliente
     * @example
     * // Get one EstadoCliente
     * const estadoCliente = await prisma.estadoCliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoClienteClient<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstadoClientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadoClientes
     * const estadoClientes = await prisma.estadoCliente.findMany()
     * 
     * // Get first 10 EstadoClientes
     * const estadoClientes = await prisma.estadoCliente.findMany({ take: 10 })
     * 
     * // Only select the `id_estado_cliente`
     * const estadoClienteWithId_estado_clienteOnly = await prisma.estadoCliente.findMany({ select: { id_estado_cliente: true } })
     * 
     */
    findMany<T extends EstadoClienteFindManyArgs>(args?: SelectSubset<T, EstadoClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstadoCliente.
     * @param {EstadoClienteCreateArgs} args - Arguments to create a EstadoCliente.
     * @example
     * // Create one EstadoCliente
     * const EstadoCliente = await prisma.estadoCliente.create({
     *   data: {
     *     // ... data to create a EstadoCliente
     *   }
     * })
     * 
     */
    create<T extends EstadoClienteCreateArgs>(args: SelectSubset<T, EstadoClienteCreateArgs<ExtArgs>>): Prisma__EstadoClienteClient<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstadoClientes.
     * @param {EstadoClienteCreateManyArgs} args - Arguments to create many EstadoClientes.
     * @example
     * // Create many EstadoClientes
     * const estadoCliente = await prisma.estadoCliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoClienteCreateManyArgs>(args?: SelectSubset<T, EstadoClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EstadoClientes and returns the data saved in the database.
     * @param {EstadoClienteCreateManyAndReturnArgs} args - Arguments to create many EstadoClientes.
     * @example
     * // Create many EstadoClientes
     * const estadoCliente = await prisma.estadoCliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EstadoClientes and only return the `id_estado_cliente`
     * const estadoClienteWithId_estado_clienteOnly = await prisma.estadoCliente.createManyAndReturn({
     *   select: { id_estado_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadoClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadoClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EstadoCliente.
     * @param {EstadoClienteDeleteArgs} args - Arguments to delete one EstadoCliente.
     * @example
     * // Delete one EstadoCliente
     * const EstadoCliente = await prisma.estadoCliente.delete({
     *   where: {
     *     // ... filter to delete one EstadoCliente
     *   }
     * })
     * 
     */
    delete<T extends EstadoClienteDeleteArgs>(args: SelectSubset<T, EstadoClienteDeleteArgs<ExtArgs>>): Prisma__EstadoClienteClient<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstadoCliente.
     * @param {EstadoClienteUpdateArgs} args - Arguments to update one EstadoCliente.
     * @example
     * // Update one EstadoCliente
     * const estadoCliente = await prisma.estadoCliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoClienteUpdateArgs>(args: SelectSubset<T, EstadoClienteUpdateArgs<ExtArgs>>): Prisma__EstadoClienteClient<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstadoClientes.
     * @param {EstadoClienteDeleteManyArgs} args - Arguments to filter EstadoClientes to delete.
     * @example
     * // Delete a few EstadoClientes
     * const { count } = await prisma.estadoCliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoClienteDeleteManyArgs>(args?: SelectSubset<T, EstadoClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadoClientes
     * const estadoCliente = await prisma.estadoCliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoClienteUpdateManyArgs>(args: SelectSubset<T, EstadoClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoClientes and returns the data updated in the database.
     * @param {EstadoClienteUpdateManyAndReturnArgs} args - Arguments to update many EstadoClientes.
     * @example
     * // Update many EstadoClientes
     * const estadoCliente = await prisma.estadoCliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EstadoClientes and only return the `id_estado_cliente`
     * const estadoClienteWithId_estado_clienteOnly = await prisma.estadoCliente.updateManyAndReturn({
     *   select: { id_estado_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstadoClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, EstadoClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EstadoCliente.
     * @param {EstadoClienteUpsertArgs} args - Arguments to update or create a EstadoCliente.
     * @example
     * // Update or create a EstadoCliente
     * const estadoCliente = await prisma.estadoCliente.upsert({
     *   create: {
     *     // ... data to create a EstadoCliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadoCliente we want to update
     *   }
     * })
     */
    upsert<T extends EstadoClienteUpsertArgs>(args: SelectSubset<T, EstadoClienteUpsertArgs<ExtArgs>>): Prisma__EstadoClienteClient<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstadoClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoClienteCountArgs} args - Arguments to filter EstadoClientes to count.
     * @example
     * // Count the number of EstadoClientes
     * const count = await prisma.estadoCliente.count({
     *   where: {
     *     // ... the filter for the EstadoClientes we want to count
     *   }
     * })
    **/
    count<T extends EstadoClienteCountArgs>(
      args?: Subset<T, EstadoClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstadoCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstadoClienteAggregateArgs>(args: Subset<T, EstadoClienteAggregateArgs>): Prisma.PrismaPromise<GetEstadoClienteAggregateType<T>>

    /**
     * Group by EstadoCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstadoClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoClienteGroupByArgs['orderBy'] }
        : { orderBy?: EstadoClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstadoClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstadoCliente model
   */
  readonly fields: EstadoClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstadoCliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends EstadoCliente$clientesArgs<ExtArgs> = {}>(args?: Subset<T, EstadoCliente$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EstadoCliente model
   */
  interface EstadoClienteFieldRefs {
    readonly id_estado_cliente: FieldRef<"EstadoCliente", 'Int'>
    readonly estado: FieldRef<"EstadoCliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EstadoCliente findUnique
   */
  export type EstadoClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCliente to fetch.
     */
    where: EstadoClienteWhereUniqueInput
  }

  /**
   * EstadoCliente findUniqueOrThrow
   */
  export type EstadoClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCliente to fetch.
     */
    where: EstadoClienteWhereUniqueInput
  }

  /**
   * EstadoCliente findFirst
   */
  export type EstadoClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCliente to fetch.
     */
    where?: EstadoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoClientes to fetch.
     */
    orderBy?: EstadoClienteOrderByWithRelationInput | EstadoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoClientes.
     */
    cursor?: EstadoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoClientes.
     */
    distinct?: EstadoClienteScalarFieldEnum | EstadoClienteScalarFieldEnum[]
  }

  /**
   * EstadoCliente findFirstOrThrow
   */
  export type EstadoClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCliente to fetch.
     */
    where?: EstadoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoClientes to fetch.
     */
    orderBy?: EstadoClienteOrderByWithRelationInput | EstadoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoClientes.
     */
    cursor?: EstadoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoClientes.
     */
    distinct?: EstadoClienteScalarFieldEnum | EstadoClienteScalarFieldEnum[]
  }

  /**
   * EstadoCliente findMany
   */
  export type EstadoClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoClientes to fetch.
     */
    where?: EstadoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoClientes to fetch.
     */
    orderBy?: EstadoClienteOrderByWithRelationInput | EstadoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstadoClientes.
     */
    cursor?: EstadoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoClientes.
     */
    skip?: number
    distinct?: EstadoClienteScalarFieldEnum | EstadoClienteScalarFieldEnum[]
  }

  /**
   * EstadoCliente create
   */
  export type EstadoClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a EstadoCliente.
     */
    data: XOR<EstadoClienteCreateInput, EstadoClienteUncheckedCreateInput>
  }

  /**
   * EstadoCliente createMany
   */
  export type EstadoClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstadoClientes.
     */
    data: EstadoClienteCreateManyInput | EstadoClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoCliente createManyAndReturn
   */
  export type EstadoClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * The data used to create many EstadoClientes.
     */
    data: EstadoClienteCreateManyInput | EstadoClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoCliente update
   */
  export type EstadoClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a EstadoCliente.
     */
    data: XOR<EstadoClienteUpdateInput, EstadoClienteUncheckedUpdateInput>
    /**
     * Choose, which EstadoCliente to update.
     */
    where: EstadoClienteWhereUniqueInput
  }

  /**
   * EstadoCliente updateMany
   */
  export type EstadoClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstadoClientes.
     */
    data: XOR<EstadoClienteUpdateManyMutationInput, EstadoClienteUncheckedUpdateManyInput>
    /**
     * Filter which EstadoClientes to update
     */
    where?: EstadoClienteWhereInput
    /**
     * Limit how many EstadoClientes to update.
     */
    limit?: number
  }

  /**
   * EstadoCliente updateManyAndReturn
   */
  export type EstadoClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * The data used to update EstadoClientes.
     */
    data: XOR<EstadoClienteUpdateManyMutationInput, EstadoClienteUncheckedUpdateManyInput>
    /**
     * Filter which EstadoClientes to update
     */
    where?: EstadoClienteWhereInput
    /**
     * Limit how many EstadoClientes to update.
     */
    limit?: number
  }

  /**
   * EstadoCliente upsert
   */
  export type EstadoClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the EstadoCliente to update in case it exists.
     */
    where: EstadoClienteWhereUniqueInput
    /**
     * In case the EstadoCliente found by the `where` argument doesn't exist, create a new EstadoCliente with this data.
     */
    create: XOR<EstadoClienteCreateInput, EstadoClienteUncheckedCreateInput>
    /**
     * In case the EstadoCliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoClienteUpdateInput, EstadoClienteUncheckedUpdateInput>
  }

  /**
   * EstadoCliente delete
   */
  export type EstadoClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
    /**
     * Filter which EstadoCliente to delete.
     */
    where: EstadoClienteWhereUniqueInput
  }

  /**
   * EstadoCliente deleteMany
   */
  export type EstadoClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoClientes to delete
     */
    where?: EstadoClienteWhereInput
    /**
     * Limit how many EstadoClientes to delete.
     */
    limit?: number
  }

  /**
   * EstadoCliente.clientes
   */
  export type EstadoCliente$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * EstadoCliente without action
   */
  export type EstadoClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCliente
     */
    select?: EstadoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCliente
     */
    omit?: EstadoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoClienteInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id_cliente: number | null
    id_empresa: number | null
    id_estado_cliente: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id_cliente: number | null
    id_empresa: number | null
    id_estado_cliente: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    telefono: string | null
    id_empresa: number | null
    id_estado_cliente: number | null
  }

  export type ClienteMaxAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    telefono: string | null
    id_empresa: number | null
    id_estado_cliente: number | null
  }

  export type ClienteCountAggregateOutputType = {
    id_cliente: number
    nombre: number
    apellido: number
    correo: number
    telefono: number
    id_empresa: number
    id_estado_cliente: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id_cliente?: true
    id_empresa?: true
    id_estado_cliente?: true
  }

  export type ClienteSumAggregateInputType = {
    id_cliente?: true
    id_empresa?: true
    id_estado_cliente?: true
  }

  export type ClienteMinAggregateInputType = {
    id_cliente?: true
    nombre?: true
    apellido?: true
    correo?: true
    telefono?: true
    id_empresa?: true
    id_estado_cliente?: true
  }

  export type ClienteMaxAggregateInputType = {
    id_cliente?: true
    nombre?: true
    apellido?: true
    correo?: true
    telefono?: true
    id_empresa?: true
    id_estado_cliente?: true
  }

  export type ClienteCountAggregateInputType = {
    id_cliente?: true
    nombre?: true
    apellido?: true
    correo?: true
    telefono?: true
    id_empresa?: true
    id_estado_cliente?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id_cliente: number
    nombre: string
    apellido: string
    correo: string | null
    telefono: string | null
    id_empresa: number
    id_estado_cliente: number
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    id_empresa?: boolean
    id_estado_cliente?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    estado_cliente?: boolean | EstadoClienteDefaultArgs<ExtArgs>
    proyectos?: boolean | Cliente$proyectosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    id_empresa?: boolean
    id_estado_cliente?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    estado_cliente?: boolean | EstadoClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    id_empresa?: boolean
    id_estado_cliente?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    estado_cliente?: boolean | EstadoClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    telefono?: boolean
    id_empresa?: boolean
    id_estado_cliente?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "nombre" | "apellido" | "correo" | "telefono" | "id_empresa" | "id_estado_cliente", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    estado_cliente?: boolean | EstadoClienteDefaultArgs<ExtArgs>
    proyectos?: boolean | Cliente$proyectosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    estado_cliente?: boolean | EstadoClienteDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    estado_cliente?: boolean | EstadoClienteDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      estado_cliente: Prisma.$EstadoClientePayload<ExtArgs>
      proyectos: Prisma.$ProyectoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      nombre: string
      apellido: string
      correo: string | null
      telefono: string | null
      id_empresa: number
      id_estado_cliente: number
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estado_cliente<T extends EstadoClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoClienteDefaultArgs<ExtArgs>>): Prisma__EstadoClienteClient<$Result.GetResult<Prisma.$EstadoClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proyectos<T extends Cliente$proyectosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$proyectosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id_cliente: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly apellido: FieldRef<"Cliente", 'String'>
    readonly correo: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly id_empresa: FieldRef<"Cliente", 'Int'>
    readonly id_estado_cliente: FieldRef<"Cliente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.proyectos
   */
  export type Cliente$proyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    where?: ProyectoWhereInput
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    cursor?: ProyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Consultor
   */

  export type AggregateConsultor = {
    _count: ConsultorCountAggregateOutputType | null
    _avg: ConsultorAvgAggregateOutputType | null
    _sum: ConsultorSumAggregateOutputType | null
    _min: ConsultorMinAggregateOutputType | null
    _max: ConsultorMaxAggregateOutputType | null
  }

  export type ConsultorAvgAggregateOutputType = {
    id_consultor: number | null
    id_usuario: number | null
  }

  export type ConsultorSumAggregateOutputType = {
    id_consultor: number | null
    id_usuario: number | null
  }

  export type ConsultorMinAggregateOutputType = {
    id_consultor: number | null
    nombre: string | null
    telefono: string | null
    correo: string | null
    activo: boolean | null
    id_usuario: number | null
  }

  export type ConsultorMaxAggregateOutputType = {
    id_consultor: number | null
    nombre: string | null
    telefono: string | null
    correo: string | null
    activo: boolean | null
    id_usuario: number | null
  }

  export type ConsultorCountAggregateOutputType = {
    id_consultor: number
    nombre: number
    telefono: number
    correo: number
    activo: number
    id_usuario: number
    _all: number
  }


  export type ConsultorAvgAggregateInputType = {
    id_consultor?: true
    id_usuario?: true
  }

  export type ConsultorSumAggregateInputType = {
    id_consultor?: true
    id_usuario?: true
  }

  export type ConsultorMinAggregateInputType = {
    id_consultor?: true
    nombre?: true
    telefono?: true
    correo?: true
    activo?: true
    id_usuario?: true
  }

  export type ConsultorMaxAggregateInputType = {
    id_consultor?: true
    nombre?: true
    telefono?: true
    correo?: true
    activo?: true
    id_usuario?: true
  }

  export type ConsultorCountAggregateInputType = {
    id_consultor?: true
    nombre?: true
    telefono?: true
    correo?: true
    activo?: true
    id_usuario?: true
    _all?: true
  }

  export type ConsultorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultor to aggregate.
     */
    where?: ConsultorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultors to fetch.
     */
    orderBy?: ConsultorOrderByWithRelationInput | ConsultorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultors
    **/
    _count?: true | ConsultorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultorMaxAggregateInputType
  }

  export type GetConsultorAggregateType<T extends ConsultorAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultor[P]>
      : GetScalarType<T[P], AggregateConsultor[P]>
  }




  export type ConsultorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultorWhereInput
    orderBy?: ConsultorOrderByWithAggregationInput | ConsultorOrderByWithAggregationInput[]
    by: ConsultorScalarFieldEnum[] | ConsultorScalarFieldEnum
    having?: ConsultorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultorCountAggregateInputType | true
    _avg?: ConsultorAvgAggregateInputType
    _sum?: ConsultorSumAggregateInputType
    _min?: ConsultorMinAggregateInputType
    _max?: ConsultorMaxAggregateInputType
  }

  export type ConsultorGroupByOutputType = {
    id_consultor: number
    nombre: string
    telefono: string | null
    correo: string | null
    activo: boolean
    id_usuario: number | null
    _count: ConsultorCountAggregateOutputType | null
    _avg: ConsultorAvgAggregateOutputType | null
    _sum: ConsultorSumAggregateOutputType | null
    _min: ConsultorMinAggregateOutputType | null
    _max: ConsultorMaxAggregateOutputType | null
  }

  type GetConsultorGroupByPayload<T extends ConsultorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultorGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultorGroupByOutputType[P]>
        }
      >
    >


  export type ConsultorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_consultor?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
    activo?: boolean
    id_usuario?: boolean
    usuario?: boolean | Consultor$usuarioArgs<ExtArgs>
    proyectos?: boolean | Consultor$proyectosArgs<ExtArgs>
    _count?: boolean | ConsultorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultor"]>

  export type ConsultorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_consultor?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
    activo?: boolean
    id_usuario?: boolean
    usuario?: boolean | Consultor$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["consultor"]>

  export type ConsultorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_consultor?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
    activo?: boolean
    id_usuario?: boolean
    usuario?: boolean | Consultor$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["consultor"]>

  export type ConsultorSelectScalar = {
    id_consultor?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
    activo?: boolean
    id_usuario?: boolean
  }

  export type ConsultorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_consultor" | "nombre" | "telefono" | "correo" | "activo" | "id_usuario", ExtArgs["result"]["consultor"]>
  export type ConsultorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Consultor$usuarioArgs<ExtArgs>
    proyectos?: boolean | Consultor$proyectosArgs<ExtArgs>
    _count?: boolean | ConsultorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsultorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Consultor$usuarioArgs<ExtArgs>
  }
  export type ConsultorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Consultor$usuarioArgs<ExtArgs>
  }

  export type $ConsultorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultor"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      proyectos: Prisma.$ProyectoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_consultor: number
      nombre: string
      telefono: string | null
      correo: string | null
      activo: boolean
      id_usuario: number | null
    }, ExtArgs["result"]["consultor"]>
    composites: {}
  }

  type ConsultorGetPayload<S extends boolean | null | undefined | ConsultorDefaultArgs> = $Result.GetResult<Prisma.$ConsultorPayload, S>

  type ConsultorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultorCountAggregateInputType | true
    }

  export interface ConsultorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultor'], meta: { name: 'Consultor' } }
    /**
     * Find zero or one Consultor that matches the filter.
     * @param {ConsultorFindUniqueArgs} args - Arguments to find a Consultor
     * @example
     * // Get one Consultor
     * const consultor = await prisma.consultor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultorFindUniqueArgs>(args: SelectSubset<T, ConsultorFindUniqueArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultorFindUniqueOrThrowArgs} args - Arguments to find a Consultor
     * @example
     * // Get one Consultor
     * const consultor = await prisma.consultor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultorFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorFindFirstArgs} args - Arguments to find a Consultor
     * @example
     * // Get one Consultor
     * const consultor = await prisma.consultor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultorFindFirstArgs>(args?: SelectSubset<T, ConsultorFindFirstArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorFindFirstOrThrowArgs} args - Arguments to find a Consultor
     * @example
     * // Get one Consultor
     * const consultor = await prisma.consultor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultorFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultors
     * const consultors = await prisma.consultor.findMany()
     * 
     * // Get first 10 Consultors
     * const consultors = await prisma.consultor.findMany({ take: 10 })
     * 
     * // Only select the `id_consultor`
     * const consultorWithId_consultorOnly = await prisma.consultor.findMany({ select: { id_consultor: true } })
     * 
     */
    findMany<T extends ConsultorFindManyArgs>(args?: SelectSubset<T, ConsultorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultor.
     * @param {ConsultorCreateArgs} args - Arguments to create a Consultor.
     * @example
     * // Create one Consultor
     * const Consultor = await prisma.consultor.create({
     *   data: {
     *     // ... data to create a Consultor
     *   }
     * })
     * 
     */
    create<T extends ConsultorCreateArgs>(args: SelectSubset<T, ConsultorCreateArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultors.
     * @param {ConsultorCreateManyArgs} args - Arguments to create many Consultors.
     * @example
     * // Create many Consultors
     * const consultor = await prisma.consultor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultorCreateManyArgs>(args?: SelectSubset<T, ConsultorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultors and returns the data saved in the database.
     * @param {ConsultorCreateManyAndReturnArgs} args - Arguments to create many Consultors.
     * @example
     * // Create many Consultors
     * const consultor = await prisma.consultor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultors and only return the `id_consultor`
     * const consultorWithId_consultorOnly = await prisma.consultor.createManyAndReturn({
     *   select: { id_consultor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultorCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consultor.
     * @param {ConsultorDeleteArgs} args - Arguments to delete one Consultor.
     * @example
     * // Delete one Consultor
     * const Consultor = await prisma.consultor.delete({
     *   where: {
     *     // ... filter to delete one Consultor
     *   }
     * })
     * 
     */
    delete<T extends ConsultorDeleteArgs>(args: SelectSubset<T, ConsultorDeleteArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultor.
     * @param {ConsultorUpdateArgs} args - Arguments to update one Consultor.
     * @example
     * // Update one Consultor
     * const consultor = await prisma.consultor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultorUpdateArgs>(args: SelectSubset<T, ConsultorUpdateArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultors.
     * @param {ConsultorDeleteManyArgs} args - Arguments to filter Consultors to delete.
     * @example
     * // Delete a few Consultors
     * const { count } = await prisma.consultor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultorDeleteManyArgs>(args?: SelectSubset<T, ConsultorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultors
     * const consultor = await prisma.consultor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultorUpdateManyArgs>(args: SelectSubset<T, ConsultorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultors and returns the data updated in the database.
     * @param {ConsultorUpdateManyAndReturnArgs} args - Arguments to update many Consultors.
     * @example
     * // Update many Consultors
     * const consultor = await prisma.consultor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultors and only return the `id_consultor`
     * const consultorWithId_consultorOnly = await prisma.consultor.updateManyAndReturn({
     *   select: { id_consultor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultorUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consultor.
     * @param {ConsultorUpsertArgs} args - Arguments to update or create a Consultor.
     * @example
     * // Update or create a Consultor
     * const consultor = await prisma.consultor.upsert({
     *   create: {
     *     // ... data to create a Consultor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultor we want to update
     *   }
     * })
     */
    upsert<T extends ConsultorUpsertArgs>(args: SelectSubset<T, ConsultorUpsertArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorCountArgs} args - Arguments to filter Consultors to count.
     * @example
     * // Count the number of Consultors
     * const count = await prisma.consultor.count({
     *   where: {
     *     // ... the filter for the Consultors we want to count
     *   }
     * })
    **/
    count<T extends ConsultorCountArgs>(
      args?: Subset<T, ConsultorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultorAggregateArgs>(args: Subset<T, ConsultorAggregateArgs>): Prisma.PrismaPromise<GetConsultorAggregateType<T>>

    /**
     * Group by Consultor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultorGroupByArgs['orderBy'] }
        : { orderBy?: ConsultorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultor model
   */
  readonly fields: ConsultorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Consultor$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Consultor$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proyectos<T extends Consultor$proyectosArgs<ExtArgs> = {}>(args?: Subset<T, Consultor$proyectosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consultor model
   */
  interface ConsultorFieldRefs {
    readonly id_consultor: FieldRef<"Consultor", 'Int'>
    readonly nombre: FieldRef<"Consultor", 'String'>
    readonly telefono: FieldRef<"Consultor", 'String'>
    readonly correo: FieldRef<"Consultor", 'String'>
    readonly activo: FieldRef<"Consultor", 'Boolean'>
    readonly id_usuario: FieldRef<"Consultor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Consultor findUnique
   */
  export type ConsultorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    /**
     * Filter, which Consultor to fetch.
     */
    where: ConsultorWhereUniqueInput
  }

  /**
   * Consultor findUniqueOrThrow
   */
  export type ConsultorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    /**
     * Filter, which Consultor to fetch.
     */
    where: ConsultorWhereUniqueInput
  }

  /**
   * Consultor findFirst
   */
  export type ConsultorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    /**
     * Filter, which Consultor to fetch.
     */
    where?: ConsultorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultors to fetch.
     */
    orderBy?: ConsultorOrderByWithRelationInput | ConsultorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultors.
     */
    cursor?: ConsultorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultors.
     */
    distinct?: ConsultorScalarFieldEnum | ConsultorScalarFieldEnum[]
  }

  /**
   * Consultor findFirstOrThrow
   */
  export type ConsultorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    /**
     * Filter, which Consultor to fetch.
     */
    where?: ConsultorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultors to fetch.
     */
    orderBy?: ConsultorOrderByWithRelationInput | ConsultorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultors.
     */
    cursor?: ConsultorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultors.
     */
    distinct?: ConsultorScalarFieldEnum | ConsultorScalarFieldEnum[]
  }

  /**
   * Consultor findMany
   */
  export type ConsultorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    /**
     * Filter, which Consultors to fetch.
     */
    where?: ConsultorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultors to fetch.
     */
    orderBy?: ConsultorOrderByWithRelationInput | ConsultorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultors.
     */
    cursor?: ConsultorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultors.
     */
    skip?: number
    distinct?: ConsultorScalarFieldEnum | ConsultorScalarFieldEnum[]
  }

  /**
   * Consultor create
   */
  export type ConsultorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    /**
     * The data needed to create a Consultor.
     */
    data: XOR<ConsultorCreateInput, ConsultorUncheckedCreateInput>
  }

  /**
   * Consultor createMany
   */
  export type ConsultorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultors.
     */
    data: ConsultorCreateManyInput | ConsultorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consultor createManyAndReturn
   */
  export type ConsultorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * The data used to create many Consultors.
     */
    data: ConsultorCreateManyInput | ConsultorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultor update
   */
  export type ConsultorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    /**
     * The data needed to update a Consultor.
     */
    data: XOR<ConsultorUpdateInput, ConsultorUncheckedUpdateInput>
    /**
     * Choose, which Consultor to update.
     */
    where: ConsultorWhereUniqueInput
  }

  /**
   * Consultor updateMany
   */
  export type ConsultorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultors.
     */
    data: XOR<ConsultorUpdateManyMutationInput, ConsultorUncheckedUpdateManyInput>
    /**
     * Filter which Consultors to update
     */
    where?: ConsultorWhereInput
    /**
     * Limit how many Consultors to update.
     */
    limit?: number
  }

  /**
   * Consultor updateManyAndReturn
   */
  export type ConsultorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * The data used to update Consultors.
     */
    data: XOR<ConsultorUpdateManyMutationInput, ConsultorUncheckedUpdateManyInput>
    /**
     * Filter which Consultors to update
     */
    where?: ConsultorWhereInput
    /**
     * Limit how many Consultors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultor upsert
   */
  export type ConsultorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    /**
     * The filter to search for the Consultor to update in case it exists.
     */
    where: ConsultorWhereUniqueInput
    /**
     * In case the Consultor found by the `where` argument doesn't exist, create a new Consultor with this data.
     */
    create: XOR<ConsultorCreateInput, ConsultorUncheckedCreateInput>
    /**
     * In case the Consultor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultorUpdateInput, ConsultorUncheckedUpdateInput>
  }

  /**
   * Consultor delete
   */
  export type ConsultorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
    /**
     * Filter which Consultor to delete.
     */
    where: ConsultorWhereUniqueInput
  }

  /**
   * Consultor deleteMany
   */
  export type ConsultorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultors to delete
     */
    where?: ConsultorWhereInput
    /**
     * Limit how many Consultors to delete.
     */
    limit?: number
  }

  /**
   * Consultor.usuario
   */
  export type Consultor$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Consultor.proyectos
   */
  export type Consultor$proyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    where?: ProyectoWhereInput
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    cursor?: ProyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Consultor without action
   */
  export type ConsultorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultor
     */
    select?: ConsultorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultor
     */
    omit?: ConsultorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultorInclude<ExtArgs> | null
  }


  /**
   * Model EstadoProyecto
   */

  export type AggregateEstadoProyecto = {
    _count: EstadoProyectoCountAggregateOutputType | null
    _avg: EstadoProyectoAvgAggregateOutputType | null
    _sum: EstadoProyectoSumAggregateOutputType | null
    _min: EstadoProyectoMinAggregateOutputType | null
    _max: EstadoProyectoMaxAggregateOutputType | null
  }

  export type EstadoProyectoAvgAggregateOutputType = {
    id_estado_proyecto: number | null
  }

  export type EstadoProyectoSumAggregateOutputType = {
    id_estado_proyecto: number | null
  }

  export type EstadoProyectoMinAggregateOutputType = {
    id_estado_proyecto: number | null
    estado: string | null
  }

  export type EstadoProyectoMaxAggregateOutputType = {
    id_estado_proyecto: number | null
    estado: string | null
  }

  export type EstadoProyectoCountAggregateOutputType = {
    id_estado_proyecto: number
    estado: number
    _all: number
  }


  export type EstadoProyectoAvgAggregateInputType = {
    id_estado_proyecto?: true
  }

  export type EstadoProyectoSumAggregateInputType = {
    id_estado_proyecto?: true
  }

  export type EstadoProyectoMinAggregateInputType = {
    id_estado_proyecto?: true
    estado?: true
  }

  export type EstadoProyectoMaxAggregateInputType = {
    id_estado_proyecto?: true
    estado?: true
  }

  export type EstadoProyectoCountAggregateInputType = {
    id_estado_proyecto?: true
    estado?: true
    _all?: true
  }

  export type EstadoProyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoProyecto to aggregate.
     */
    where?: EstadoProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoProyectos to fetch.
     */
    orderBy?: EstadoProyectoOrderByWithRelationInput | EstadoProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoProyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoProyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstadoProyectos
    **/
    _count?: true | EstadoProyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoProyectoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoProyectoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoProyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoProyectoMaxAggregateInputType
  }

  export type GetEstadoProyectoAggregateType<T extends EstadoProyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstadoProyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstadoProyecto[P]>
      : GetScalarType<T[P], AggregateEstadoProyecto[P]>
  }




  export type EstadoProyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoProyectoWhereInput
    orderBy?: EstadoProyectoOrderByWithAggregationInput | EstadoProyectoOrderByWithAggregationInput[]
    by: EstadoProyectoScalarFieldEnum[] | EstadoProyectoScalarFieldEnum
    having?: EstadoProyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoProyectoCountAggregateInputType | true
    _avg?: EstadoProyectoAvgAggregateInputType
    _sum?: EstadoProyectoSumAggregateInputType
    _min?: EstadoProyectoMinAggregateInputType
    _max?: EstadoProyectoMaxAggregateInputType
  }

  export type EstadoProyectoGroupByOutputType = {
    id_estado_proyecto: number
    estado: string
    _count: EstadoProyectoCountAggregateOutputType | null
    _avg: EstadoProyectoAvgAggregateOutputType | null
    _sum: EstadoProyectoSumAggregateOutputType | null
    _min: EstadoProyectoMinAggregateOutputType | null
    _max: EstadoProyectoMaxAggregateOutputType | null
  }

  type GetEstadoProyectoGroupByPayload<T extends EstadoProyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoProyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoProyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoProyectoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoProyectoGroupByOutputType[P]>
        }
      >
    >


  export type EstadoProyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_proyecto?: boolean
    estado?: boolean
    proyectos?: boolean | EstadoProyecto$proyectosArgs<ExtArgs>
    bitacoras?: boolean | EstadoProyecto$bitacorasArgs<ExtArgs>
    _count?: boolean | EstadoProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoProyecto"]>

  export type EstadoProyectoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_proyecto?: boolean
    estado?: boolean
  }, ExtArgs["result"]["estadoProyecto"]>

  export type EstadoProyectoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_proyecto?: boolean
    estado?: boolean
  }, ExtArgs["result"]["estadoProyecto"]>

  export type EstadoProyectoSelectScalar = {
    id_estado_proyecto?: boolean
    estado?: boolean
  }

  export type EstadoProyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estado_proyecto" | "estado", ExtArgs["result"]["estadoProyecto"]>
  export type EstadoProyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyectos?: boolean | EstadoProyecto$proyectosArgs<ExtArgs>
    bitacoras?: boolean | EstadoProyecto$bitacorasArgs<ExtArgs>
    _count?: boolean | EstadoProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstadoProyectoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstadoProyectoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstadoProyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstadoProyecto"
    objects: {
      proyectos: Prisma.$ProyectoPayload<ExtArgs>[]
      bitacoras: Prisma.$BitacoraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estado_proyecto: number
      estado: string
    }, ExtArgs["result"]["estadoProyecto"]>
    composites: {}
  }

  type EstadoProyectoGetPayload<S extends boolean | null | undefined | EstadoProyectoDefaultArgs> = $Result.GetResult<Prisma.$EstadoProyectoPayload, S>

  type EstadoProyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadoProyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoProyectoCountAggregateInputType | true
    }

  export interface EstadoProyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstadoProyecto'], meta: { name: 'EstadoProyecto' } }
    /**
     * Find zero or one EstadoProyecto that matches the filter.
     * @param {EstadoProyectoFindUniqueArgs} args - Arguments to find a EstadoProyecto
     * @example
     * // Get one EstadoProyecto
     * const estadoProyecto = await prisma.estadoProyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoProyectoFindUniqueArgs>(args: SelectSubset<T, EstadoProyectoFindUniqueArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstadoProyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoProyectoFindUniqueOrThrowArgs} args - Arguments to find a EstadoProyecto
     * @example
     * // Get one EstadoProyecto
     * const estadoProyecto = await prisma.estadoProyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoProyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoProyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoProyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoProyectoFindFirstArgs} args - Arguments to find a EstadoProyecto
     * @example
     * // Get one EstadoProyecto
     * const estadoProyecto = await prisma.estadoProyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoProyectoFindFirstArgs>(args?: SelectSubset<T, EstadoProyectoFindFirstArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoProyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoProyectoFindFirstOrThrowArgs} args - Arguments to find a EstadoProyecto
     * @example
     * // Get one EstadoProyecto
     * const estadoProyecto = await prisma.estadoProyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoProyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoProyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstadoProyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoProyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadoProyectos
     * const estadoProyectos = await prisma.estadoProyecto.findMany()
     * 
     * // Get first 10 EstadoProyectos
     * const estadoProyectos = await prisma.estadoProyecto.findMany({ take: 10 })
     * 
     * // Only select the `id_estado_proyecto`
     * const estadoProyectoWithId_estado_proyectoOnly = await prisma.estadoProyecto.findMany({ select: { id_estado_proyecto: true } })
     * 
     */
    findMany<T extends EstadoProyectoFindManyArgs>(args?: SelectSubset<T, EstadoProyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstadoProyecto.
     * @param {EstadoProyectoCreateArgs} args - Arguments to create a EstadoProyecto.
     * @example
     * // Create one EstadoProyecto
     * const EstadoProyecto = await prisma.estadoProyecto.create({
     *   data: {
     *     // ... data to create a EstadoProyecto
     *   }
     * })
     * 
     */
    create<T extends EstadoProyectoCreateArgs>(args: SelectSubset<T, EstadoProyectoCreateArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstadoProyectos.
     * @param {EstadoProyectoCreateManyArgs} args - Arguments to create many EstadoProyectos.
     * @example
     * // Create many EstadoProyectos
     * const estadoProyecto = await prisma.estadoProyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoProyectoCreateManyArgs>(args?: SelectSubset<T, EstadoProyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EstadoProyectos and returns the data saved in the database.
     * @param {EstadoProyectoCreateManyAndReturnArgs} args - Arguments to create many EstadoProyectos.
     * @example
     * // Create many EstadoProyectos
     * const estadoProyecto = await prisma.estadoProyecto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EstadoProyectos and only return the `id_estado_proyecto`
     * const estadoProyectoWithId_estado_proyectoOnly = await prisma.estadoProyecto.createManyAndReturn({
     *   select: { id_estado_proyecto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadoProyectoCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadoProyectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EstadoProyecto.
     * @param {EstadoProyectoDeleteArgs} args - Arguments to delete one EstadoProyecto.
     * @example
     * // Delete one EstadoProyecto
     * const EstadoProyecto = await prisma.estadoProyecto.delete({
     *   where: {
     *     // ... filter to delete one EstadoProyecto
     *   }
     * })
     * 
     */
    delete<T extends EstadoProyectoDeleteArgs>(args: SelectSubset<T, EstadoProyectoDeleteArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstadoProyecto.
     * @param {EstadoProyectoUpdateArgs} args - Arguments to update one EstadoProyecto.
     * @example
     * // Update one EstadoProyecto
     * const estadoProyecto = await prisma.estadoProyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoProyectoUpdateArgs>(args: SelectSubset<T, EstadoProyectoUpdateArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstadoProyectos.
     * @param {EstadoProyectoDeleteManyArgs} args - Arguments to filter EstadoProyectos to delete.
     * @example
     * // Delete a few EstadoProyectos
     * const { count } = await prisma.estadoProyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoProyectoDeleteManyArgs>(args?: SelectSubset<T, EstadoProyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoProyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoProyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadoProyectos
     * const estadoProyecto = await prisma.estadoProyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoProyectoUpdateManyArgs>(args: SelectSubset<T, EstadoProyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoProyectos and returns the data updated in the database.
     * @param {EstadoProyectoUpdateManyAndReturnArgs} args - Arguments to update many EstadoProyectos.
     * @example
     * // Update many EstadoProyectos
     * const estadoProyecto = await prisma.estadoProyecto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EstadoProyectos and only return the `id_estado_proyecto`
     * const estadoProyectoWithId_estado_proyectoOnly = await prisma.estadoProyecto.updateManyAndReturn({
     *   select: { id_estado_proyecto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstadoProyectoUpdateManyAndReturnArgs>(args: SelectSubset<T, EstadoProyectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EstadoProyecto.
     * @param {EstadoProyectoUpsertArgs} args - Arguments to update or create a EstadoProyecto.
     * @example
     * // Update or create a EstadoProyecto
     * const estadoProyecto = await prisma.estadoProyecto.upsert({
     *   create: {
     *     // ... data to create a EstadoProyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadoProyecto we want to update
     *   }
     * })
     */
    upsert<T extends EstadoProyectoUpsertArgs>(args: SelectSubset<T, EstadoProyectoUpsertArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstadoProyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoProyectoCountArgs} args - Arguments to filter EstadoProyectos to count.
     * @example
     * // Count the number of EstadoProyectos
     * const count = await prisma.estadoProyecto.count({
     *   where: {
     *     // ... the filter for the EstadoProyectos we want to count
     *   }
     * })
    **/
    count<T extends EstadoProyectoCountArgs>(
      args?: Subset<T, EstadoProyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoProyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstadoProyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoProyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstadoProyectoAggregateArgs>(args: Subset<T, EstadoProyectoAggregateArgs>): Prisma.PrismaPromise<GetEstadoProyectoAggregateType<T>>

    /**
     * Group by EstadoProyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoProyectoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstadoProyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoProyectoGroupByArgs['orderBy'] }
        : { orderBy?: EstadoProyectoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstadoProyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoProyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstadoProyecto model
   */
  readonly fields: EstadoProyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstadoProyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoProyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyectos<T extends EstadoProyecto$proyectosArgs<ExtArgs> = {}>(args?: Subset<T, EstadoProyecto$proyectosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bitacoras<T extends EstadoProyecto$bitacorasArgs<ExtArgs> = {}>(args?: Subset<T, EstadoProyecto$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EstadoProyecto model
   */
  interface EstadoProyectoFieldRefs {
    readonly id_estado_proyecto: FieldRef<"EstadoProyecto", 'Int'>
    readonly estado: FieldRef<"EstadoProyecto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EstadoProyecto findUnique
   */
  export type EstadoProyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoProyecto to fetch.
     */
    where: EstadoProyectoWhereUniqueInput
  }

  /**
   * EstadoProyecto findUniqueOrThrow
   */
  export type EstadoProyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoProyecto to fetch.
     */
    where: EstadoProyectoWhereUniqueInput
  }

  /**
   * EstadoProyecto findFirst
   */
  export type EstadoProyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoProyecto to fetch.
     */
    where?: EstadoProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoProyectos to fetch.
     */
    orderBy?: EstadoProyectoOrderByWithRelationInput | EstadoProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoProyectos.
     */
    cursor?: EstadoProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoProyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoProyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoProyectos.
     */
    distinct?: EstadoProyectoScalarFieldEnum | EstadoProyectoScalarFieldEnum[]
  }

  /**
   * EstadoProyecto findFirstOrThrow
   */
  export type EstadoProyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoProyecto to fetch.
     */
    where?: EstadoProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoProyectos to fetch.
     */
    orderBy?: EstadoProyectoOrderByWithRelationInput | EstadoProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoProyectos.
     */
    cursor?: EstadoProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoProyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoProyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoProyectos.
     */
    distinct?: EstadoProyectoScalarFieldEnum | EstadoProyectoScalarFieldEnum[]
  }

  /**
   * EstadoProyecto findMany
   */
  export type EstadoProyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoProyectos to fetch.
     */
    where?: EstadoProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoProyectos to fetch.
     */
    orderBy?: EstadoProyectoOrderByWithRelationInput | EstadoProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstadoProyectos.
     */
    cursor?: EstadoProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoProyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoProyectos.
     */
    skip?: number
    distinct?: EstadoProyectoScalarFieldEnum | EstadoProyectoScalarFieldEnum[]
  }

  /**
   * EstadoProyecto create
   */
  export type EstadoProyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a EstadoProyecto.
     */
    data: XOR<EstadoProyectoCreateInput, EstadoProyectoUncheckedCreateInput>
  }

  /**
   * EstadoProyecto createMany
   */
  export type EstadoProyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstadoProyectos.
     */
    data: EstadoProyectoCreateManyInput | EstadoProyectoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoProyecto createManyAndReturn
   */
  export type EstadoProyectoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * The data used to create many EstadoProyectos.
     */
    data: EstadoProyectoCreateManyInput | EstadoProyectoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoProyecto update
   */
  export type EstadoProyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a EstadoProyecto.
     */
    data: XOR<EstadoProyectoUpdateInput, EstadoProyectoUncheckedUpdateInput>
    /**
     * Choose, which EstadoProyecto to update.
     */
    where: EstadoProyectoWhereUniqueInput
  }

  /**
   * EstadoProyecto updateMany
   */
  export type EstadoProyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstadoProyectos.
     */
    data: XOR<EstadoProyectoUpdateManyMutationInput, EstadoProyectoUncheckedUpdateManyInput>
    /**
     * Filter which EstadoProyectos to update
     */
    where?: EstadoProyectoWhereInput
    /**
     * Limit how many EstadoProyectos to update.
     */
    limit?: number
  }

  /**
   * EstadoProyecto updateManyAndReturn
   */
  export type EstadoProyectoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * The data used to update EstadoProyectos.
     */
    data: XOR<EstadoProyectoUpdateManyMutationInput, EstadoProyectoUncheckedUpdateManyInput>
    /**
     * Filter which EstadoProyectos to update
     */
    where?: EstadoProyectoWhereInput
    /**
     * Limit how many EstadoProyectos to update.
     */
    limit?: number
  }

  /**
   * EstadoProyecto upsert
   */
  export type EstadoProyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the EstadoProyecto to update in case it exists.
     */
    where: EstadoProyectoWhereUniqueInput
    /**
     * In case the EstadoProyecto found by the `where` argument doesn't exist, create a new EstadoProyecto with this data.
     */
    create: XOR<EstadoProyectoCreateInput, EstadoProyectoUncheckedCreateInput>
    /**
     * In case the EstadoProyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoProyectoUpdateInput, EstadoProyectoUncheckedUpdateInput>
  }

  /**
   * EstadoProyecto delete
   */
  export type EstadoProyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
    /**
     * Filter which EstadoProyecto to delete.
     */
    where: EstadoProyectoWhereUniqueInput
  }

  /**
   * EstadoProyecto deleteMany
   */
  export type EstadoProyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoProyectos to delete
     */
    where?: EstadoProyectoWhereInput
    /**
     * Limit how many EstadoProyectos to delete.
     */
    limit?: number
  }

  /**
   * EstadoProyecto.proyectos
   */
  export type EstadoProyecto$proyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    where?: ProyectoWhereInput
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    cursor?: ProyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * EstadoProyecto.bitacoras
   */
  export type EstadoProyecto$bitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    where?: BitacoraWhereInput
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    cursor?: BitacoraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * EstadoProyecto without action
   */
  export type EstadoProyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoProyecto
     */
    select?: EstadoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoProyecto
     */
    omit?: EstadoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoProyectoInclude<ExtArgs> | null
  }


  /**
   * Model Proyecto
   */

  export type AggregateProyecto = {
    _count: ProyectoCountAggregateOutputType | null
    _avg: ProyectoAvgAggregateOutputType | null
    _sum: ProyectoSumAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  export type ProyectoAvgAggregateOutputType = {
    id_proyecto: number | null
    id_cliente: number | null
    id_consultor: number | null
    id_estado_proyecto: number | null
  }

  export type ProyectoSumAggregateOutputType = {
    id_proyecto: number | null
    id_cliente: number | null
    id_consultor: number | null
    id_estado_proyecto: number | null
  }

  export type ProyectoMinAggregateOutputType = {
    id_proyecto: number | null
    no_proyecto: string | null
    nombre: string | null
    descripcion: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    id_cliente: number | null
    id_consultor: number | null
    id_estado_proyecto: number | null
  }

  export type ProyectoMaxAggregateOutputType = {
    id_proyecto: number | null
    no_proyecto: string | null
    nombre: string | null
    descripcion: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    id_cliente: number | null
    id_consultor: number | null
    id_estado_proyecto: number | null
  }

  export type ProyectoCountAggregateOutputType = {
    id_proyecto: number
    no_proyecto: number
    nombre: number
    descripcion: number
    fecha_inicio: number
    fecha_fin: number
    id_cliente: number
    id_consultor: number
    id_estado_proyecto: number
    _all: number
  }


  export type ProyectoAvgAggregateInputType = {
    id_proyecto?: true
    id_cliente?: true
    id_consultor?: true
    id_estado_proyecto?: true
  }

  export type ProyectoSumAggregateInputType = {
    id_proyecto?: true
    id_cliente?: true
    id_consultor?: true
    id_estado_proyecto?: true
  }

  export type ProyectoMinAggregateInputType = {
    id_proyecto?: true
    no_proyecto?: true
    nombre?: true
    descripcion?: true
    fecha_inicio?: true
    fecha_fin?: true
    id_cliente?: true
    id_consultor?: true
    id_estado_proyecto?: true
  }

  export type ProyectoMaxAggregateInputType = {
    id_proyecto?: true
    no_proyecto?: true
    nombre?: true
    descripcion?: true
    fecha_inicio?: true
    fecha_fin?: true
    id_cliente?: true
    id_consultor?: true
    id_estado_proyecto?: true
  }

  export type ProyectoCountAggregateInputType = {
    id_proyecto?: true
    no_proyecto?: true
    nombre?: true
    descripcion?: true
    fecha_inicio?: true
    fecha_fin?: true
    id_cliente?: true
    id_consultor?: true
    id_estado_proyecto?: true
    _all?: true
  }

  export type ProyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proyecto to aggregate.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proyectos
    **/
    _count?: true | ProyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProyectoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProyectoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProyectoMaxAggregateInputType
  }

  export type GetProyectoAggregateType<T extends ProyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateProyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProyecto[P]>
      : GetScalarType<T[P], AggregateProyecto[P]>
  }




  export type ProyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProyectoWhereInput
    orderBy?: ProyectoOrderByWithAggregationInput | ProyectoOrderByWithAggregationInput[]
    by: ProyectoScalarFieldEnum[] | ProyectoScalarFieldEnum
    having?: ProyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProyectoCountAggregateInputType | true
    _avg?: ProyectoAvgAggregateInputType
    _sum?: ProyectoSumAggregateInputType
    _min?: ProyectoMinAggregateInputType
    _max?: ProyectoMaxAggregateInputType
  }

  export type ProyectoGroupByOutputType = {
    id_proyecto: number
    no_proyecto: string
    nombre: string | null
    descripcion: string | null
    fecha_inicio: Date
    fecha_fin: Date | null
    id_cliente: number
    id_consultor: number
    id_estado_proyecto: number
    _count: ProyectoCountAggregateOutputType | null
    _avg: ProyectoAvgAggregateOutputType | null
    _sum: ProyectoSumAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  type GetProyectoGroupByPayload<T extends ProyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
            : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
        }
      >
    >


  export type ProyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proyecto?: boolean
    no_proyecto?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_cliente?: boolean
    id_consultor?: boolean
    id_estado_proyecto?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    consultor?: boolean | ConsultorDefaultArgs<ExtArgs>
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
    bitacoras?: boolean | Proyecto$bitacorasArgs<ExtArgs>
    log_montos?: boolean | Proyecto$log_montosArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyecto"]>

  export type ProyectoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proyecto?: boolean
    no_proyecto?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_cliente?: boolean
    id_consultor?: boolean
    id_estado_proyecto?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    consultor?: boolean | ConsultorDefaultArgs<ExtArgs>
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyecto"]>

  export type ProyectoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proyecto?: boolean
    no_proyecto?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_cliente?: boolean
    id_consultor?: boolean
    id_estado_proyecto?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    consultor?: boolean | ConsultorDefaultArgs<ExtArgs>
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyecto"]>

  export type ProyectoSelectScalar = {
    id_proyecto?: boolean
    no_proyecto?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_cliente?: boolean
    id_consultor?: boolean
    id_estado_proyecto?: boolean
  }

  export type ProyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proyecto" | "no_proyecto" | "nombre" | "descripcion" | "fecha_inicio" | "fecha_fin" | "id_cliente" | "id_consultor" | "id_estado_proyecto", ExtArgs["result"]["proyecto"]>
  export type ProyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    consultor?: boolean | ConsultorDefaultArgs<ExtArgs>
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
    bitacoras?: boolean | Proyecto$bitacorasArgs<ExtArgs>
    log_montos?: boolean | Proyecto$log_montosArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProyectoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    consultor?: boolean | ConsultorDefaultArgs<ExtArgs>
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
  }
  export type ProyectoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    consultor?: boolean | ConsultorDefaultArgs<ExtArgs>
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
  }

  export type $ProyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proyecto"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      consultor: Prisma.$ConsultorPayload<ExtArgs>
      estado_proyecto: Prisma.$EstadoProyectoPayload<ExtArgs>
      bitacoras: Prisma.$BitacoraPayload<ExtArgs>[]
      log_montos: Prisma.$LogMontoProyectoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proyecto: number
      no_proyecto: string
      nombre: string | null
      descripcion: string | null
      fecha_inicio: Date
      fecha_fin: Date | null
      id_cliente: number
      id_consultor: number
      id_estado_proyecto: number
    }, ExtArgs["result"]["proyecto"]>
    composites: {}
  }

  type ProyectoGetPayload<S extends boolean | null | undefined | ProyectoDefaultArgs> = $Result.GetResult<Prisma.$ProyectoPayload, S>

  type ProyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProyectoCountAggregateInputType | true
    }

  export interface ProyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proyecto'], meta: { name: 'Proyecto' } }
    /**
     * Find zero or one Proyecto that matches the filter.
     * @param {ProyectoFindUniqueArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProyectoFindUniqueArgs>(args: SelectSubset<T, ProyectoFindUniqueArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProyectoFindUniqueOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoFindFirstArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProyectoFindFirstArgs>(args?: SelectSubset<T, ProyectoFindFirstArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoFindFirstOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proyectos
     * const proyectos = await prisma.proyecto.findMany()
     * 
     * // Get first 10 Proyectos
     * const proyectos = await prisma.proyecto.findMany({ take: 10 })
     * 
     * // Only select the `id_proyecto`
     * const proyectoWithId_proyectoOnly = await prisma.proyecto.findMany({ select: { id_proyecto: true } })
     * 
     */
    findMany<T extends ProyectoFindManyArgs>(args?: SelectSubset<T, ProyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proyecto.
     * @param {ProyectoCreateArgs} args - Arguments to create a Proyecto.
     * @example
     * // Create one Proyecto
     * const Proyecto = await prisma.proyecto.create({
     *   data: {
     *     // ... data to create a Proyecto
     *   }
     * })
     * 
     */
    create<T extends ProyectoCreateArgs>(args: SelectSubset<T, ProyectoCreateArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proyectos.
     * @param {ProyectoCreateManyArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyecto = await prisma.proyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProyectoCreateManyArgs>(args?: SelectSubset<T, ProyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proyectos and returns the data saved in the database.
     * @param {ProyectoCreateManyAndReturnArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyecto = await prisma.proyecto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proyectos and only return the `id_proyecto`
     * const proyectoWithId_proyectoOnly = await prisma.proyecto.createManyAndReturn({
     *   select: { id_proyecto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProyectoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProyectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proyecto.
     * @param {ProyectoDeleteArgs} args - Arguments to delete one Proyecto.
     * @example
     * // Delete one Proyecto
     * const Proyecto = await prisma.proyecto.delete({
     *   where: {
     *     // ... filter to delete one Proyecto
     *   }
     * })
     * 
     */
    delete<T extends ProyectoDeleteArgs>(args: SelectSubset<T, ProyectoDeleteArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proyecto.
     * @param {ProyectoUpdateArgs} args - Arguments to update one Proyecto.
     * @example
     * // Update one Proyecto
     * const proyecto = await prisma.proyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProyectoUpdateArgs>(args: SelectSubset<T, ProyectoUpdateArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proyectos.
     * @param {ProyectoDeleteManyArgs} args - Arguments to filter Proyectos to delete.
     * @example
     * // Delete a few Proyectos
     * const { count } = await prisma.proyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProyectoDeleteManyArgs>(args?: SelectSubset<T, ProyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proyectos
     * const proyecto = await prisma.proyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProyectoUpdateManyArgs>(args: SelectSubset<T, ProyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos and returns the data updated in the database.
     * @param {ProyectoUpdateManyAndReturnArgs} args - Arguments to update many Proyectos.
     * @example
     * // Update many Proyectos
     * const proyecto = await prisma.proyecto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proyectos and only return the `id_proyecto`
     * const proyectoWithId_proyectoOnly = await prisma.proyecto.updateManyAndReturn({
     *   select: { id_proyecto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProyectoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProyectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proyecto.
     * @param {ProyectoUpsertArgs} args - Arguments to update or create a Proyecto.
     * @example
     * // Update or create a Proyecto
     * const proyecto = await prisma.proyecto.upsert({
     *   create: {
     *     // ... data to create a Proyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proyecto we want to update
     *   }
     * })
     */
    upsert<T extends ProyectoUpsertArgs>(args: SelectSubset<T, ProyectoUpsertArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoCountArgs} args - Arguments to filter Proyectos to count.
     * @example
     * // Count the number of Proyectos
     * const count = await prisma.proyecto.count({
     *   where: {
     *     // ... the filter for the Proyectos we want to count
     *   }
     * })
    **/
    count<T extends ProyectoCountArgs>(
      args?: Subset<T, ProyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProyectoAggregateArgs>(args: Subset<T, ProyectoAggregateArgs>): Prisma.PrismaPromise<GetProyectoAggregateType<T>>

    /**
     * Group by Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProyectoGroupByArgs['orderBy'] }
        : { orderBy?: ProyectoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proyecto model
   */
  readonly fields: ProyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consultor<T extends ConsultorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultorDefaultArgs<ExtArgs>>): Prisma__ConsultorClient<$Result.GetResult<Prisma.$ConsultorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estado_proyecto<T extends EstadoProyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoProyectoDefaultArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bitacoras<T extends Proyecto$bitacorasArgs<ExtArgs> = {}>(args?: Subset<T, Proyecto$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    log_montos<T extends Proyecto$log_montosArgs<ExtArgs> = {}>(args?: Subset<T, Proyecto$log_montosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proyecto model
   */
  interface ProyectoFieldRefs {
    readonly id_proyecto: FieldRef<"Proyecto", 'Int'>
    readonly no_proyecto: FieldRef<"Proyecto", 'String'>
    readonly nombre: FieldRef<"Proyecto", 'String'>
    readonly descripcion: FieldRef<"Proyecto", 'String'>
    readonly fecha_inicio: FieldRef<"Proyecto", 'DateTime'>
    readonly fecha_fin: FieldRef<"Proyecto", 'DateTime'>
    readonly id_cliente: FieldRef<"Proyecto", 'Int'>
    readonly id_consultor: FieldRef<"Proyecto", 'Int'>
    readonly id_estado_proyecto: FieldRef<"Proyecto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Proyecto findUnique
   */
  export type ProyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto findUniqueOrThrow
   */
  export type ProyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto findFirst
   */
  export type ProyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proyectos.
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto findFirstOrThrow
   */
  export type ProyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proyectos.
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto findMany
   */
  export type ProyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyectos to fetch.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proyectos.
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto create
   */
  export type ProyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a Proyecto.
     */
    data: XOR<ProyectoCreateInput, ProyectoUncheckedCreateInput>
  }

  /**
   * Proyecto createMany
   */
  export type ProyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proyectos.
     */
    data: ProyectoCreateManyInput | ProyectoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proyecto createManyAndReturn
   */
  export type ProyectoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * The data used to create many Proyectos.
     */
    data: ProyectoCreateManyInput | ProyectoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proyecto update
   */
  export type ProyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a Proyecto.
     */
    data: XOR<ProyectoUpdateInput, ProyectoUncheckedUpdateInput>
    /**
     * Choose, which Proyecto to update.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto updateMany
   */
  export type ProyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proyectos.
     */
    data: XOR<ProyectoUpdateManyMutationInput, ProyectoUncheckedUpdateManyInput>
    /**
     * Filter which Proyectos to update
     */
    where?: ProyectoWhereInput
    /**
     * Limit how many Proyectos to update.
     */
    limit?: number
  }

  /**
   * Proyecto updateManyAndReturn
   */
  export type ProyectoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * The data used to update Proyectos.
     */
    data: XOR<ProyectoUpdateManyMutationInput, ProyectoUncheckedUpdateManyInput>
    /**
     * Filter which Proyectos to update
     */
    where?: ProyectoWhereInput
    /**
     * Limit how many Proyectos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proyecto upsert
   */
  export type ProyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the Proyecto to update in case it exists.
     */
    where: ProyectoWhereUniqueInput
    /**
     * In case the Proyecto found by the `where` argument doesn't exist, create a new Proyecto with this data.
     */
    create: XOR<ProyectoCreateInput, ProyectoUncheckedCreateInput>
    /**
     * In case the Proyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProyectoUpdateInput, ProyectoUncheckedUpdateInput>
  }

  /**
   * Proyecto delete
   */
  export type ProyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter which Proyecto to delete.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto deleteMany
   */
  export type ProyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proyectos to delete
     */
    where?: ProyectoWhereInput
    /**
     * Limit how many Proyectos to delete.
     */
    limit?: number
  }

  /**
   * Proyecto.bitacoras
   */
  export type Proyecto$bitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    where?: BitacoraWhereInput
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    cursor?: BitacoraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Proyecto.log_montos
   */
  export type Proyecto$log_montosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    where?: LogMontoProyectoWhereInput
    orderBy?: LogMontoProyectoOrderByWithRelationInput | LogMontoProyectoOrderByWithRelationInput[]
    cursor?: LogMontoProyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogMontoProyectoScalarFieldEnum | LogMontoProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto without action
   */
  export type ProyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
  }


  /**
   * Model Prioridad
   */

  export type AggregatePrioridad = {
    _count: PrioridadCountAggregateOutputType | null
    _avg: PrioridadAvgAggregateOutputType | null
    _sum: PrioridadSumAggregateOutputType | null
    _min: PrioridadMinAggregateOutputType | null
    _max: PrioridadMaxAggregateOutputType | null
  }

  export type PrioridadAvgAggregateOutputType = {
    id_prioridad: number | null
  }

  export type PrioridadSumAggregateOutputType = {
    id_prioridad: number | null
  }

  export type PrioridadMinAggregateOutputType = {
    id_prioridad: number | null
    nombre_prioridad: string | null
  }

  export type PrioridadMaxAggregateOutputType = {
    id_prioridad: number | null
    nombre_prioridad: string | null
  }

  export type PrioridadCountAggregateOutputType = {
    id_prioridad: number
    nombre_prioridad: number
    _all: number
  }


  export type PrioridadAvgAggregateInputType = {
    id_prioridad?: true
  }

  export type PrioridadSumAggregateInputType = {
    id_prioridad?: true
  }

  export type PrioridadMinAggregateInputType = {
    id_prioridad?: true
    nombre_prioridad?: true
  }

  export type PrioridadMaxAggregateInputType = {
    id_prioridad?: true
    nombre_prioridad?: true
  }

  export type PrioridadCountAggregateInputType = {
    id_prioridad?: true
    nombre_prioridad?: true
    _all?: true
  }

  export type PrioridadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prioridad to aggregate.
     */
    where?: PrioridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prioridads to fetch.
     */
    orderBy?: PrioridadOrderByWithRelationInput | PrioridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrioridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prioridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prioridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prioridads
    **/
    _count?: true | PrioridadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrioridadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrioridadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrioridadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrioridadMaxAggregateInputType
  }

  export type GetPrioridadAggregateType<T extends PrioridadAggregateArgs> = {
        [P in keyof T & keyof AggregatePrioridad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrioridad[P]>
      : GetScalarType<T[P], AggregatePrioridad[P]>
  }




  export type PrioridadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrioridadWhereInput
    orderBy?: PrioridadOrderByWithAggregationInput | PrioridadOrderByWithAggregationInput[]
    by: PrioridadScalarFieldEnum[] | PrioridadScalarFieldEnum
    having?: PrioridadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrioridadCountAggregateInputType | true
    _avg?: PrioridadAvgAggregateInputType
    _sum?: PrioridadSumAggregateInputType
    _min?: PrioridadMinAggregateInputType
    _max?: PrioridadMaxAggregateInputType
  }

  export type PrioridadGroupByOutputType = {
    id_prioridad: number
    nombre_prioridad: string
    _count: PrioridadCountAggregateOutputType | null
    _avg: PrioridadAvgAggregateOutputType | null
    _sum: PrioridadSumAggregateOutputType | null
    _min: PrioridadMinAggregateOutputType | null
    _max: PrioridadMaxAggregateOutputType | null
  }

  type GetPrioridadGroupByPayload<T extends PrioridadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrioridadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrioridadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrioridadGroupByOutputType[P]>
            : GetScalarType<T[P], PrioridadGroupByOutputType[P]>
        }
      >
    >


  export type PrioridadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prioridad?: boolean
    nombre_prioridad?: boolean
    bitacoras?: boolean | Prioridad$bitacorasArgs<ExtArgs>
    _count?: boolean | PrioridadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prioridad"]>

  export type PrioridadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prioridad?: boolean
    nombre_prioridad?: boolean
  }, ExtArgs["result"]["prioridad"]>

  export type PrioridadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prioridad?: boolean
    nombre_prioridad?: boolean
  }, ExtArgs["result"]["prioridad"]>

  export type PrioridadSelectScalar = {
    id_prioridad?: boolean
    nombre_prioridad?: boolean
  }

  export type PrioridadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prioridad" | "nombre_prioridad", ExtArgs["result"]["prioridad"]>
  export type PrioridadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacoras?: boolean | Prioridad$bitacorasArgs<ExtArgs>
    _count?: boolean | PrioridadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrioridadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PrioridadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PrioridadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prioridad"
    objects: {
      bitacoras: Prisma.$BitacoraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prioridad: number
      nombre_prioridad: string
    }, ExtArgs["result"]["prioridad"]>
    composites: {}
  }

  type PrioridadGetPayload<S extends boolean | null | undefined | PrioridadDefaultArgs> = $Result.GetResult<Prisma.$PrioridadPayload, S>

  type PrioridadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrioridadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrioridadCountAggregateInputType | true
    }

  export interface PrioridadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prioridad'], meta: { name: 'Prioridad' } }
    /**
     * Find zero or one Prioridad that matches the filter.
     * @param {PrioridadFindUniqueArgs} args - Arguments to find a Prioridad
     * @example
     * // Get one Prioridad
     * const prioridad = await prisma.prioridad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrioridadFindUniqueArgs>(args: SelectSubset<T, PrioridadFindUniqueArgs<ExtArgs>>): Prisma__PrioridadClient<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prioridad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrioridadFindUniqueOrThrowArgs} args - Arguments to find a Prioridad
     * @example
     * // Get one Prioridad
     * const prioridad = await prisma.prioridad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrioridadFindUniqueOrThrowArgs>(args: SelectSubset<T, PrioridadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrioridadClient<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prioridad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioridadFindFirstArgs} args - Arguments to find a Prioridad
     * @example
     * // Get one Prioridad
     * const prioridad = await prisma.prioridad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrioridadFindFirstArgs>(args?: SelectSubset<T, PrioridadFindFirstArgs<ExtArgs>>): Prisma__PrioridadClient<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prioridad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioridadFindFirstOrThrowArgs} args - Arguments to find a Prioridad
     * @example
     * // Get one Prioridad
     * const prioridad = await prisma.prioridad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrioridadFindFirstOrThrowArgs>(args?: SelectSubset<T, PrioridadFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrioridadClient<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prioridads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioridadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prioridads
     * const prioridads = await prisma.prioridad.findMany()
     * 
     * // Get first 10 Prioridads
     * const prioridads = await prisma.prioridad.findMany({ take: 10 })
     * 
     * // Only select the `id_prioridad`
     * const prioridadWithId_prioridadOnly = await prisma.prioridad.findMany({ select: { id_prioridad: true } })
     * 
     */
    findMany<T extends PrioridadFindManyArgs>(args?: SelectSubset<T, PrioridadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prioridad.
     * @param {PrioridadCreateArgs} args - Arguments to create a Prioridad.
     * @example
     * // Create one Prioridad
     * const Prioridad = await prisma.prioridad.create({
     *   data: {
     *     // ... data to create a Prioridad
     *   }
     * })
     * 
     */
    create<T extends PrioridadCreateArgs>(args: SelectSubset<T, PrioridadCreateArgs<ExtArgs>>): Prisma__PrioridadClient<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prioridads.
     * @param {PrioridadCreateManyArgs} args - Arguments to create many Prioridads.
     * @example
     * // Create many Prioridads
     * const prioridad = await prisma.prioridad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrioridadCreateManyArgs>(args?: SelectSubset<T, PrioridadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prioridads and returns the data saved in the database.
     * @param {PrioridadCreateManyAndReturnArgs} args - Arguments to create many Prioridads.
     * @example
     * // Create many Prioridads
     * const prioridad = await prisma.prioridad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prioridads and only return the `id_prioridad`
     * const prioridadWithId_prioridadOnly = await prisma.prioridad.createManyAndReturn({
     *   select: { id_prioridad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrioridadCreateManyAndReturnArgs>(args?: SelectSubset<T, PrioridadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prioridad.
     * @param {PrioridadDeleteArgs} args - Arguments to delete one Prioridad.
     * @example
     * // Delete one Prioridad
     * const Prioridad = await prisma.prioridad.delete({
     *   where: {
     *     // ... filter to delete one Prioridad
     *   }
     * })
     * 
     */
    delete<T extends PrioridadDeleteArgs>(args: SelectSubset<T, PrioridadDeleteArgs<ExtArgs>>): Prisma__PrioridadClient<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prioridad.
     * @param {PrioridadUpdateArgs} args - Arguments to update one Prioridad.
     * @example
     * // Update one Prioridad
     * const prioridad = await prisma.prioridad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrioridadUpdateArgs>(args: SelectSubset<T, PrioridadUpdateArgs<ExtArgs>>): Prisma__PrioridadClient<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prioridads.
     * @param {PrioridadDeleteManyArgs} args - Arguments to filter Prioridads to delete.
     * @example
     * // Delete a few Prioridads
     * const { count } = await prisma.prioridad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrioridadDeleteManyArgs>(args?: SelectSubset<T, PrioridadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prioridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioridadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prioridads
     * const prioridad = await prisma.prioridad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrioridadUpdateManyArgs>(args: SelectSubset<T, PrioridadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prioridads and returns the data updated in the database.
     * @param {PrioridadUpdateManyAndReturnArgs} args - Arguments to update many Prioridads.
     * @example
     * // Update many Prioridads
     * const prioridad = await prisma.prioridad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prioridads and only return the `id_prioridad`
     * const prioridadWithId_prioridadOnly = await prisma.prioridad.updateManyAndReturn({
     *   select: { id_prioridad: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrioridadUpdateManyAndReturnArgs>(args: SelectSubset<T, PrioridadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prioridad.
     * @param {PrioridadUpsertArgs} args - Arguments to update or create a Prioridad.
     * @example
     * // Update or create a Prioridad
     * const prioridad = await prisma.prioridad.upsert({
     *   create: {
     *     // ... data to create a Prioridad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prioridad we want to update
     *   }
     * })
     */
    upsert<T extends PrioridadUpsertArgs>(args: SelectSubset<T, PrioridadUpsertArgs<ExtArgs>>): Prisma__PrioridadClient<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prioridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioridadCountArgs} args - Arguments to filter Prioridads to count.
     * @example
     * // Count the number of Prioridads
     * const count = await prisma.prioridad.count({
     *   where: {
     *     // ... the filter for the Prioridads we want to count
     *   }
     * })
    **/
    count<T extends PrioridadCountArgs>(
      args?: Subset<T, PrioridadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrioridadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prioridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioridadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrioridadAggregateArgs>(args: Subset<T, PrioridadAggregateArgs>): Prisma.PrismaPromise<GetPrioridadAggregateType<T>>

    /**
     * Group by Prioridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioridadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrioridadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrioridadGroupByArgs['orderBy'] }
        : { orderBy?: PrioridadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrioridadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrioridadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prioridad model
   */
  readonly fields: PrioridadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prioridad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrioridadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bitacoras<T extends Prioridad$bitacorasArgs<ExtArgs> = {}>(args?: Subset<T, Prioridad$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prioridad model
   */
  interface PrioridadFieldRefs {
    readonly id_prioridad: FieldRef<"Prioridad", 'Int'>
    readonly nombre_prioridad: FieldRef<"Prioridad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prioridad findUnique
   */
  export type PrioridadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
    /**
     * Filter, which Prioridad to fetch.
     */
    where: PrioridadWhereUniqueInput
  }

  /**
   * Prioridad findUniqueOrThrow
   */
  export type PrioridadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
    /**
     * Filter, which Prioridad to fetch.
     */
    where: PrioridadWhereUniqueInput
  }

  /**
   * Prioridad findFirst
   */
  export type PrioridadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
    /**
     * Filter, which Prioridad to fetch.
     */
    where?: PrioridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prioridads to fetch.
     */
    orderBy?: PrioridadOrderByWithRelationInput | PrioridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prioridads.
     */
    cursor?: PrioridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prioridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prioridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prioridads.
     */
    distinct?: PrioridadScalarFieldEnum | PrioridadScalarFieldEnum[]
  }

  /**
   * Prioridad findFirstOrThrow
   */
  export type PrioridadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
    /**
     * Filter, which Prioridad to fetch.
     */
    where?: PrioridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prioridads to fetch.
     */
    orderBy?: PrioridadOrderByWithRelationInput | PrioridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prioridads.
     */
    cursor?: PrioridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prioridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prioridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prioridads.
     */
    distinct?: PrioridadScalarFieldEnum | PrioridadScalarFieldEnum[]
  }

  /**
   * Prioridad findMany
   */
  export type PrioridadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
    /**
     * Filter, which Prioridads to fetch.
     */
    where?: PrioridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prioridads to fetch.
     */
    orderBy?: PrioridadOrderByWithRelationInput | PrioridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prioridads.
     */
    cursor?: PrioridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prioridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prioridads.
     */
    skip?: number
    distinct?: PrioridadScalarFieldEnum | PrioridadScalarFieldEnum[]
  }

  /**
   * Prioridad create
   */
  export type PrioridadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
    /**
     * The data needed to create a Prioridad.
     */
    data: XOR<PrioridadCreateInput, PrioridadUncheckedCreateInput>
  }

  /**
   * Prioridad createMany
   */
  export type PrioridadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prioridads.
     */
    data: PrioridadCreateManyInput | PrioridadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prioridad createManyAndReturn
   */
  export type PrioridadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * The data used to create many Prioridads.
     */
    data: PrioridadCreateManyInput | PrioridadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prioridad update
   */
  export type PrioridadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
    /**
     * The data needed to update a Prioridad.
     */
    data: XOR<PrioridadUpdateInput, PrioridadUncheckedUpdateInput>
    /**
     * Choose, which Prioridad to update.
     */
    where: PrioridadWhereUniqueInput
  }

  /**
   * Prioridad updateMany
   */
  export type PrioridadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prioridads.
     */
    data: XOR<PrioridadUpdateManyMutationInput, PrioridadUncheckedUpdateManyInput>
    /**
     * Filter which Prioridads to update
     */
    where?: PrioridadWhereInput
    /**
     * Limit how many Prioridads to update.
     */
    limit?: number
  }

  /**
   * Prioridad updateManyAndReturn
   */
  export type PrioridadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * The data used to update Prioridads.
     */
    data: XOR<PrioridadUpdateManyMutationInput, PrioridadUncheckedUpdateManyInput>
    /**
     * Filter which Prioridads to update
     */
    where?: PrioridadWhereInput
    /**
     * Limit how many Prioridads to update.
     */
    limit?: number
  }

  /**
   * Prioridad upsert
   */
  export type PrioridadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
    /**
     * The filter to search for the Prioridad to update in case it exists.
     */
    where: PrioridadWhereUniqueInput
    /**
     * In case the Prioridad found by the `where` argument doesn't exist, create a new Prioridad with this data.
     */
    create: XOR<PrioridadCreateInput, PrioridadUncheckedCreateInput>
    /**
     * In case the Prioridad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrioridadUpdateInput, PrioridadUncheckedUpdateInput>
  }

  /**
   * Prioridad delete
   */
  export type PrioridadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
    /**
     * Filter which Prioridad to delete.
     */
    where: PrioridadWhereUniqueInput
  }

  /**
   * Prioridad deleteMany
   */
  export type PrioridadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prioridads to delete
     */
    where?: PrioridadWhereInput
    /**
     * Limit how many Prioridads to delete.
     */
    limit?: number
  }

  /**
   * Prioridad.bitacoras
   */
  export type Prioridad$bitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    where?: BitacoraWhereInput
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    cursor?: BitacoraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Prioridad without action
   */
  export type PrioridadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prioridad
     */
    select?: PrioridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prioridad
     */
    omit?: PrioridadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrioridadInclude<ExtArgs> | null
  }


  /**
   * Model Bitacora
   */

  export type AggregateBitacora = {
    _count: BitacoraCountAggregateOutputType | null
    _avg: BitacoraAvgAggregateOutputType | null
    _sum: BitacoraSumAggregateOutputType | null
    _min: BitacoraMinAggregateOutputType | null
    _max: BitacoraMaxAggregateOutputType | null
  }

  export type BitacoraAvgAggregateOutputType = {
    id_bitacora: number | null
    id_estado_proyecto: number | null
    id_proyecto: number | null
    id_usuario: number | null
    id_prioridad: number | null
  }

  export type BitacoraSumAggregateOutputType = {
    id_bitacora: number | null
    id_estado_proyecto: number | null
    id_proyecto: number | null
    id_usuario: number | null
    id_prioridad: number | null
  }

  export type BitacoraMinAggregateOutputType = {
    id_bitacora: number | null
    fecha: Date | null
    observaciones: string | null
    id_estado_proyecto: number | null
    id_proyecto: number | null
    id_usuario: number | null
    id_prioridad: number | null
  }

  export type BitacoraMaxAggregateOutputType = {
    id_bitacora: number | null
    fecha: Date | null
    observaciones: string | null
    id_estado_proyecto: number | null
    id_proyecto: number | null
    id_usuario: number | null
    id_prioridad: number | null
  }

  export type BitacoraCountAggregateOutputType = {
    id_bitacora: number
    fecha: number
    observaciones: number
    id_estado_proyecto: number
    id_proyecto: number
    id_usuario: number
    id_prioridad: number
    _all: number
  }


  export type BitacoraAvgAggregateInputType = {
    id_bitacora?: true
    id_estado_proyecto?: true
    id_proyecto?: true
    id_usuario?: true
    id_prioridad?: true
  }

  export type BitacoraSumAggregateInputType = {
    id_bitacora?: true
    id_estado_proyecto?: true
    id_proyecto?: true
    id_usuario?: true
    id_prioridad?: true
  }

  export type BitacoraMinAggregateInputType = {
    id_bitacora?: true
    fecha?: true
    observaciones?: true
    id_estado_proyecto?: true
    id_proyecto?: true
    id_usuario?: true
    id_prioridad?: true
  }

  export type BitacoraMaxAggregateInputType = {
    id_bitacora?: true
    fecha?: true
    observaciones?: true
    id_estado_proyecto?: true
    id_proyecto?: true
    id_usuario?: true
    id_prioridad?: true
  }

  export type BitacoraCountAggregateInputType = {
    id_bitacora?: true
    fecha?: true
    observaciones?: true
    id_estado_proyecto?: true
    id_proyecto?: true
    id_usuario?: true
    id_prioridad?: true
    _all?: true
  }

  export type BitacoraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bitacora to aggregate.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bitacoras
    **/
    _count?: true | BitacoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BitacoraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BitacoraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BitacoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BitacoraMaxAggregateInputType
  }

  export type GetBitacoraAggregateType<T extends BitacoraAggregateArgs> = {
        [P in keyof T & keyof AggregateBitacora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBitacora[P]>
      : GetScalarType<T[P], AggregateBitacora[P]>
  }




  export type BitacoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitacoraWhereInput
    orderBy?: BitacoraOrderByWithAggregationInput | BitacoraOrderByWithAggregationInput[]
    by: BitacoraScalarFieldEnum[] | BitacoraScalarFieldEnum
    having?: BitacoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BitacoraCountAggregateInputType | true
    _avg?: BitacoraAvgAggregateInputType
    _sum?: BitacoraSumAggregateInputType
    _min?: BitacoraMinAggregateInputType
    _max?: BitacoraMaxAggregateInputType
  }

  export type BitacoraGroupByOutputType = {
    id_bitacora: number
    fecha: Date
    observaciones: string | null
    id_estado_proyecto: number
    id_proyecto: number
    id_usuario: number
    id_prioridad: number
    _count: BitacoraCountAggregateOutputType | null
    _avg: BitacoraAvgAggregateOutputType | null
    _sum: BitacoraSumAggregateOutputType | null
    _min: BitacoraMinAggregateOutputType | null
    _max: BitacoraMaxAggregateOutputType | null
  }

  type GetBitacoraGroupByPayload<T extends BitacoraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BitacoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BitacoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BitacoraGroupByOutputType[P]>
            : GetScalarType<T[P], BitacoraGroupByOutputType[P]>
        }
      >
    >


  export type BitacoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bitacora?: boolean
    fecha?: boolean
    observaciones?: boolean
    id_estado_proyecto?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    id_prioridad?: boolean
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    prioridad?: boolean | PrioridadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type BitacoraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bitacora?: boolean
    fecha?: boolean
    observaciones?: boolean
    id_estado_proyecto?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    id_prioridad?: boolean
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    prioridad?: boolean | PrioridadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type BitacoraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bitacora?: boolean
    fecha?: boolean
    observaciones?: boolean
    id_estado_proyecto?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    id_prioridad?: boolean
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    prioridad?: boolean | PrioridadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type BitacoraSelectScalar = {
    id_bitacora?: boolean
    fecha?: boolean
    observaciones?: boolean
    id_estado_proyecto?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    id_prioridad?: boolean
  }

  export type BitacoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_bitacora" | "fecha" | "observaciones" | "id_estado_proyecto" | "id_proyecto" | "id_usuario" | "id_prioridad", ExtArgs["result"]["bitacora"]>
  export type BitacoraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    prioridad?: boolean | PrioridadDefaultArgs<ExtArgs>
  }
  export type BitacoraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    prioridad?: boolean | PrioridadDefaultArgs<ExtArgs>
  }
  export type BitacoraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_proyecto?: boolean | EstadoProyectoDefaultArgs<ExtArgs>
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    prioridad?: boolean | PrioridadDefaultArgs<ExtArgs>
  }

  export type $BitacoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bitacora"
    objects: {
      estado_proyecto: Prisma.$EstadoProyectoPayload<ExtArgs>
      proyecto: Prisma.$ProyectoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      prioridad: Prisma.$PrioridadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_bitacora: number
      fecha: Date
      observaciones: string | null
      id_estado_proyecto: number
      id_proyecto: number
      id_usuario: number
      id_prioridad: number
    }, ExtArgs["result"]["bitacora"]>
    composites: {}
  }

  type BitacoraGetPayload<S extends boolean | null | undefined | BitacoraDefaultArgs> = $Result.GetResult<Prisma.$BitacoraPayload, S>

  type BitacoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BitacoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BitacoraCountAggregateInputType | true
    }

  export interface BitacoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bitacora'], meta: { name: 'Bitacora' } }
    /**
     * Find zero or one Bitacora that matches the filter.
     * @param {BitacoraFindUniqueArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BitacoraFindUniqueArgs>(args: SelectSubset<T, BitacoraFindUniqueArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bitacora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BitacoraFindUniqueOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BitacoraFindUniqueOrThrowArgs>(args: SelectSubset<T, BitacoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bitacora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindFirstArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BitacoraFindFirstArgs>(args?: SelectSubset<T, BitacoraFindFirstArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bitacora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindFirstOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BitacoraFindFirstOrThrowArgs>(args?: SelectSubset<T, BitacoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bitacoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bitacoras
     * const bitacoras = await prisma.bitacora.findMany()
     * 
     * // Get first 10 Bitacoras
     * const bitacoras = await prisma.bitacora.findMany({ take: 10 })
     * 
     * // Only select the `id_bitacora`
     * const bitacoraWithId_bitacoraOnly = await prisma.bitacora.findMany({ select: { id_bitacora: true } })
     * 
     */
    findMany<T extends BitacoraFindManyArgs>(args?: SelectSubset<T, BitacoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bitacora.
     * @param {BitacoraCreateArgs} args - Arguments to create a Bitacora.
     * @example
     * // Create one Bitacora
     * const Bitacora = await prisma.bitacora.create({
     *   data: {
     *     // ... data to create a Bitacora
     *   }
     * })
     * 
     */
    create<T extends BitacoraCreateArgs>(args: SelectSubset<T, BitacoraCreateArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bitacoras.
     * @param {BitacoraCreateManyArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BitacoraCreateManyArgs>(args?: SelectSubset<T, BitacoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bitacoras and returns the data saved in the database.
     * @param {BitacoraCreateManyAndReturnArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bitacoras and only return the `id_bitacora`
     * const bitacoraWithId_bitacoraOnly = await prisma.bitacora.createManyAndReturn({
     *   select: { id_bitacora: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BitacoraCreateManyAndReturnArgs>(args?: SelectSubset<T, BitacoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bitacora.
     * @param {BitacoraDeleteArgs} args - Arguments to delete one Bitacora.
     * @example
     * // Delete one Bitacora
     * const Bitacora = await prisma.bitacora.delete({
     *   where: {
     *     // ... filter to delete one Bitacora
     *   }
     * })
     * 
     */
    delete<T extends BitacoraDeleteArgs>(args: SelectSubset<T, BitacoraDeleteArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bitacora.
     * @param {BitacoraUpdateArgs} args - Arguments to update one Bitacora.
     * @example
     * // Update one Bitacora
     * const bitacora = await prisma.bitacora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BitacoraUpdateArgs>(args: SelectSubset<T, BitacoraUpdateArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bitacoras.
     * @param {BitacoraDeleteManyArgs} args - Arguments to filter Bitacoras to delete.
     * @example
     * // Delete a few Bitacoras
     * const { count } = await prisma.bitacora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BitacoraDeleteManyArgs>(args?: SelectSubset<T, BitacoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BitacoraUpdateManyArgs>(args: SelectSubset<T, BitacoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacoras and returns the data updated in the database.
     * @param {BitacoraUpdateManyAndReturnArgs} args - Arguments to update many Bitacoras.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bitacoras and only return the `id_bitacora`
     * const bitacoraWithId_bitacoraOnly = await prisma.bitacora.updateManyAndReturn({
     *   select: { id_bitacora: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BitacoraUpdateManyAndReturnArgs>(args: SelectSubset<T, BitacoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bitacora.
     * @param {BitacoraUpsertArgs} args - Arguments to update or create a Bitacora.
     * @example
     * // Update or create a Bitacora
     * const bitacora = await prisma.bitacora.upsert({
     *   create: {
     *     // ... data to create a Bitacora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bitacora we want to update
     *   }
     * })
     */
    upsert<T extends BitacoraUpsertArgs>(args: SelectSubset<T, BitacoraUpsertArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraCountArgs} args - Arguments to filter Bitacoras to count.
     * @example
     * // Count the number of Bitacoras
     * const count = await prisma.bitacora.count({
     *   where: {
     *     // ... the filter for the Bitacoras we want to count
     *   }
     * })
    **/
    count<T extends BitacoraCountArgs>(
      args?: Subset<T, BitacoraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BitacoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BitacoraAggregateArgs>(args: Subset<T, BitacoraAggregateArgs>): Prisma.PrismaPromise<GetBitacoraAggregateType<T>>

    /**
     * Group by Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BitacoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BitacoraGroupByArgs['orderBy'] }
        : { orderBy?: BitacoraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BitacoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBitacoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bitacora model
   */
  readonly fields: BitacoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bitacora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BitacoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estado_proyecto<T extends EstadoProyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoProyectoDefaultArgs<ExtArgs>>): Prisma__EstadoProyectoClient<$Result.GetResult<Prisma.$EstadoProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proyecto<T extends ProyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProyectoDefaultArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prioridad<T extends PrioridadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrioridadDefaultArgs<ExtArgs>>): Prisma__PrioridadClient<$Result.GetResult<Prisma.$PrioridadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bitacora model
   */
  interface BitacoraFieldRefs {
    readonly id_bitacora: FieldRef<"Bitacora", 'Int'>
    readonly fecha: FieldRef<"Bitacora", 'DateTime'>
    readonly observaciones: FieldRef<"Bitacora", 'String'>
    readonly id_estado_proyecto: FieldRef<"Bitacora", 'Int'>
    readonly id_proyecto: FieldRef<"Bitacora", 'Int'>
    readonly id_usuario: FieldRef<"Bitacora", 'Int'>
    readonly id_prioridad: FieldRef<"Bitacora", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bitacora findUnique
   */
  export type BitacoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora findUniqueOrThrow
   */
  export type BitacoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora findFirst
   */
  export type BitacoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bitacoras.
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bitacoras.
     */
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Bitacora findFirstOrThrow
   */
  export type BitacoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bitacoras.
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bitacoras.
     */
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Bitacora findMany
   */
  export type BitacoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacoras to fetch.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bitacoras.
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Bitacora create
   */
  export type BitacoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * The data needed to create a Bitacora.
     */
    data: XOR<BitacoraCreateInput, BitacoraUncheckedCreateInput>
  }

  /**
   * Bitacora createMany
   */
  export type BitacoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bitacoras.
     */
    data: BitacoraCreateManyInput | BitacoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bitacora createManyAndReturn
   */
  export type BitacoraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * The data used to create many Bitacoras.
     */
    data: BitacoraCreateManyInput | BitacoraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bitacora update
   */
  export type BitacoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * The data needed to update a Bitacora.
     */
    data: XOR<BitacoraUpdateInput, BitacoraUncheckedUpdateInput>
    /**
     * Choose, which Bitacora to update.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora updateMany
   */
  export type BitacoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bitacoras.
     */
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyInput>
    /**
     * Filter which Bitacoras to update
     */
    where?: BitacoraWhereInput
    /**
     * Limit how many Bitacoras to update.
     */
    limit?: number
  }

  /**
   * Bitacora updateManyAndReturn
   */
  export type BitacoraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * The data used to update Bitacoras.
     */
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyInput>
    /**
     * Filter which Bitacoras to update
     */
    where?: BitacoraWhereInput
    /**
     * Limit how many Bitacoras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bitacora upsert
   */
  export type BitacoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * The filter to search for the Bitacora to update in case it exists.
     */
    where: BitacoraWhereUniqueInput
    /**
     * In case the Bitacora found by the `where` argument doesn't exist, create a new Bitacora with this data.
     */
    create: XOR<BitacoraCreateInput, BitacoraUncheckedCreateInput>
    /**
     * In case the Bitacora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BitacoraUpdateInput, BitacoraUncheckedUpdateInput>
  }

  /**
   * Bitacora delete
   */
  export type BitacoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter which Bitacora to delete.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora deleteMany
   */
  export type BitacoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bitacoras to delete
     */
    where?: BitacoraWhereInput
    /**
     * Limit how many Bitacoras to delete.
     */
    limit?: number
  }

  /**
   * Bitacora without action
   */
  export type BitacoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
  }


  /**
   * Model LogMontoProyecto
   */

  export type AggregateLogMontoProyecto = {
    _count: LogMontoProyectoCountAggregateOutputType | null
    _avg: LogMontoProyectoAvgAggregateOutputType | null
    _sum: LogMontoProyectoSumAggregateOutputType | null
    _min: LogMontoProyectoMinAggregateOutputType | null
    _max: LogMontoProyectoMaxAggregateOutputType | null
  }

  export type LogMontoProyectoAvgAggregateOutputType = {
    id_log_montos: number | null
    monto: Decimal | null
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type LogMontoProyectoSumAggregateOutputType = {
    id_log_montos: number | null
    monto: Decimal | null
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type LogMontoProyectoMinAggregateOutputType = {
    id_log_montos: number | null
    monto: Decimal | null
    observaciones: string | null
    fecha: Date | null
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type LogMontoProyectoMaxAggregateOutputType = {
    id_log_montos: number | null
    monto: Decimal | null
    observaciones: string | null
    fecha: Date | null
    id_proyecto: number | null
    id_usuario: number | null
  }

  export type LogMontoProyectoCountAggregateOutputType = {
    id_log_montos: number
    monto: number
    observaciones: number
    fecha: number
    id_proyecto: number
    id_usuario: number
    _all: number
  }


  export type LogMontoProyectoAvgAggregateInputType = {
    id_log_montos?: true
    monto?: true
    id_proyecto?: true
    id_usuario?: true
  }

  export type LogMontoProyectoSumAggregateInputType = {
    id_log_montos?: true
    monto?: true
    id_proyecto?: true
    id_usuario?: true
  }

  export type LogMontoProyectoMinAggregateInputType = {
    id_log_montos?: true
    monto?: true
    observaciones?: true
    fecha?: true
    id_proyecto?: true
    id_usuario?: true
  }

  export type LogMontoProyectoMaxAggregateInputType = {
    id_log_montos?: true
    monto?: true
    observaciones?: true
    fecha?: true
    id_proyecto?: true
    id_usuario?: true
  }

  export type LogMontoProyectoCountAggregateInputType = {
    id_log_montos?: true
    monto?: true
    observaciones?: true
    fecha?: true
    id_proyecto?: true
    id_usuario?: true
    _all?: true
  }

  export type LogMontoProyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogMontoProyecto to aggregate.
     */
    where?: LogMontoProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogMontoProyectos to fetch.
     */
    orderBy?: LogMontoProyectoOrderByWithRelationInput | LogMontoProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogMontoProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogMontoProyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogMontoProyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogMontoProyectos
    **/
    _count?: true | LogMontoProyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogMontoProyectoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogMontoProyectoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMontoProyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMontoProyectoMaxAggregateInputType
  }

  export type GetLogMontoProyectoAggregateType<T extends LogMontoProyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateLogMontoProyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogMontoProyecto[P]>
      : GetScalarType<T[P], AggregateLogMontoProyecto[P]>
  }




  export type LogMontoProyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogMontoProyectoWhereInput
    orderBy?: LogMontoProyectoOrderByWithAggregationInput | LogMontoProyectoOrderByWithAggregationInput[]
    by: LogMontoProyectoScalarFieldEnum[] | LogMontoProyectoScalarFieldEnum
    having?: LogMontoProyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogMontoProyectoCountAggregateInputType | true
    _avg?: LogMontoProyectoAvgAggregateInputType
    _sum?: LogMontoProyectoSumAggregateInputType
    _min?: LogMontoProyectoMinAggregateInputType
    _max?: LogMontoProyectoMaxAggregateInputType
  }

  export type LogMontoProyectoGroupByOutputType = {
    id_log_montos: number
    monto: Decimal
    observaciones: string | null
    fecha: Date
    id_proyecto: number
    id_usuario: number
    _count: LogMontoProyectoCountAggregateOutputType | null
    _avg: LogMontoProyectoAvgAggregateOutputType | null
    _sum: LogMontoProyectoSumAggregateOutputType | null
    _min: LogMontoProyectoMinAggregateOutputType | null
    _max: LogMontoProyectoMaxAggregateOutputType | null
  }

  type GetLogMontoProyectoGroupByPayload<T extends LogMontoProyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogMontoProyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogMontoProyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogMontoProyectoGroupByOutputType[P]>
            : GetScalarType<T[P], LogMontoProyectoGroupByOutputType[P]>
        }
      >
    >


  export type LogMontoProyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log_montos?: boolean
    monto?: boolean
    observaciones?: boolean
    fecha?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logMontoProyecto"]>

  export type LogMontoProyectoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log_montos?: boolean
    monto?: boolean
    observaciones?: boolean
    fecha?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logMontoProyecto"]>

  export type LogMontoProyectoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log_montos?: boolean
    monto?: boolean
    observaciones?: boolean
    fecha?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logMontoProyecto"]>

  export type LogMontoProyectoSelectScalar = {
    id_log_montos?: boolean
    monto?: boolean
    observaciones?: boolean
    fecha?: boolean
    id_proyecto?: boolean
    id_usuario?: boolean
  }

  export type LogMontoProyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_log_montos" | "monto" | "observaciones" | "fecha" | "id_proyecto" | "id_usuario", ExtArgs["result"]["logMontoProyecto"]>
  export type LogMontoProyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type LogMontoProyectoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type LogMontoProyectoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | ProyectoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $LogMontoProyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogMontoProyecto"
    objects: {
      proyecto: Prisma.$ProyectoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_log_montos: number
      monto: Prisma.Decimal
      observaciones: string | null
      fecha: Date
      id_proyecto: number
      id_usuario: number
    }, ExtArgs["result"]["logMontoProyecto"]>
    composites: {}
  }

  type LogMontoProyectoGetPayload<S extends boolean | null | undefined | LogMontoProyectoDefaultArgs> = $Result.GetResult<Prisma.$LogMontoProyectoPayload, S>

  type LogMontoProyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogMontoProyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogMontoProyectoCountAggregateInputType | true
    }

  export interface LogMontoProyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogMontoProyecto'], meta: { name: 'LogMontoProyecto' } }
    /**
     * Find zero or one LogMontoProyecto that matches the filter.
     * @param {LogMontoProyectoFindUniqueArgs} args - Arguments to find a LogMontoProyecto
     * @example
     * // Get one LogMontoProyecto
     * const logMontoProyecto = await prisma.logMontoProyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogMontoProyectoFindUniqueArgs>(args: SelectSubset<T, LogMontoProyectoFindUniqueArgs<ExtArgs>>): Prisma__LogMontoProyectoClient<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogMontoProyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogMontoProyectoFindUniqueOrThrowArgs} args - Arguments to find a LogMontoProyecto
     * @example
     * // Get one LogMontoProyecto
     * const logMontoProyecto = await prisma.logMontoProyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogMontoProyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, LogMontoProyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogMontoProyectoClient<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogMontoProyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogMontoProyectoFindFirstArgs} args - Arguments to find a LogMontoProyecto
     * @example
     * // Get one LogMontoProyecto
     * const logMontoProyecto = await prisma.logMontoProyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogMontoProyectoFindFirstArgs>(args?: SelectSubset<T, LogMontoProyectoFindFirstArgs<ExtArgs>>): Prisma__LogMontoProyectoClient<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogMontoProyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogMontoProyectoFindFirstOrThrowArgs} args - Arguments to find a LogMontoProyecto
     * @example
     * // Get one LogMontoProyecto
     * const logMontoProyecto = await prisma.logMontoProyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogMontoProyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, LogMontoProyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogMontoProyectoClient<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogMontoProyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogMontoProyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogMontoProyectos
     * const logMontoProyectos = await prisma.logMontoProyecto.findMany()
     * 
     * // Get first 10 LogMontoProyectos
     * const logMontoProyectos = await prisma.logMontoProyecto.findMany({ take: 10 })
     * 
     * // Only select the `id_log_montos`
     * const logMontoProyectoWithId_log_montosOnly = await prisma.logMontoProyecto.findMany({ select: { id_log_montos: true } })
     * 
     */
    findMany<T extends LogMontoProyectoFindManyArgs>(args?: SelectSubset<T, LogMontoProyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogMontoProyecto.
     * @param {LogMontoProyectoCreateArgs} args - Arguments to create a LogMontoProyecto.
     * @example
     * // Create one LogMontoProyecto
     * const LogMontoProyecto = await prisma.logMontoProyecto.create({
     *   data: {
     *     // ... data to create a LogMontoProyecto
     *   }
     * })
     * 
     */
    create<T extends LogMontoProyectoCreateArgs>(args: SelectSubset<T, LogMontoProyectoCreateArgs<ExtArgs>>): Prisma__LogMontoProyectoClient<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogMontoProyectos.
     * @param {LogMontoProyectoCreateManyArgs} args - Arguments to create many LogMontoProyectos.
     * @example
     * // Create many LogMontoProyectos
     * const logMontoProyecto = await prisma.logMontoProyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogMontoProyectoCreateManyArgs>(args?: SelectSubset<T, LogMontoProyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogMontoProyectos and returns the data saved in the database.
     * @param {LogMontoProyectoCreateManyAndReturnArgs} args - Arguments to create many LogMontoProyectos.
     * @example
     * // Create many LogMontoProyectos
     * const logMontoProyecto = await prisma.logMontoProyecto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogMontoProyectos and only return the `id_log_montos`
     * const logMontoProyectoWithId_log_montosOnly = await prisma.logMontoProyecto.createManyAndReturn({
     *   select: { id_log_montos: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogMontoProyectoCreateManyAndReturnArgs>(args?: SelectSubset<T, LogMontoProyectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogMontoProyecto.
     * @param {LogMontoProyectoDeleteArgs} args - Arguments to delete one LogMontoProyecto.
     * @example
     * // Delete one LogMontoProyecto
     * const LogMontoProyecto = await prisma.logMontoProyecto.delete({
     *   where: {
     *     // ... filter to delete one LogMontoProyecto
     *   }
     * })
     * 
     */
    delete<T extends LogMontoProyectoDeleteArgs>(args: SelectSubset<T, LogMontoProyectoDeleteArgs<ExtArgs>>): Prisma__LogMontoProyectoClient<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogMontoProyecto.
     * @param {LogMontoProyectoUpdateArgs} args - Arguments to update one LogMontoProyecto.
     * @example
     * // Update one LogMontoProyecto
     * const logMontoProyecto = await prisma.logMontoProyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogMontoProyectoUpdateArgs>(args: SelectSubset<T, LogMontoProyectoUpdateArgs<ExtArgs>>): Prisma__LogMontoProyectoClient<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogMontoProyectos.
     * @param {LogMontoProyectoDeleteManyArgs} args - Arguments to filter LogMontoProyectos to delete.
     * @example
     * // Delete a few LogMontoProyectos
     * const { count } = await prisma.logMontoProyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogMontoProyectoDeleteManyArgs>(args?: SelectSubset<T, LogMontoProyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogMontoProyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogMontoProyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogMontoProyectos
     * const logMontoProyecto = await prisma.logMontoProyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogMontoProyectoUpdateManyArgs>(args: SelectSubset<T, LogMontoProyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogMontoProyectos and returns the data updated in the database.
     * @param {LogMontoProyectoUpdateManyAndReturnArgs} args - Arguments to update many LogMontoProyectos.
     * @example
     * // Update many LogMontoProyectos
     * const logMontoProyecto = await prisma.logMontoProyecto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogMontoProyectos and only return the `id_log_montos`
     * const logMontoProyectoWithId_log_montosOnly = await prisma.logMontoProyecto.updateManyAndReturn({
     *   select: { id_log_montos: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogMontoProyectoUpdateManyAndReturnArgs>(args: SelectSubset<T, LogMontoProyectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogMontoProyecto.
     * @param {LogMontoProyectoUpsertArgs} args - Arguments to update or create a LogMontoProyecto.
     * @example
     * // Update or create a LogMontoProyecto
     * const logMontoProyecto = await prisma.logMontoProyecto.upsert({
     *   create: {
     *     // ... data to create a LogMontoProyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogMontoProyecto we want to update
     *   }
     * })
     */
    upsert<T extends LogMontoProyectoUpsertArgs>(args: SelectSubset<T, LogMontoProyectoUpsertArgs<ExtArgs>>): Prisma__LogMontoProyectoClient<$Result.GetResult<Prisma.$LogMontoProyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogMontoProyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogMontoProyectoCountArgs} args - Arguments to filter LogMontoProyectos to count.
     * @example
     * // Count the number of LogMontoProyectos
     * const count = await prisma.logMontoProyecto.count({
     *   where: {
     *     // ... the filter for the LogMontoProyectos we want to count
     *   }
     * })
    **/
    count<T extends LogMontoProyectoCountArgs>(
      args?: Subset<T, LogMontoProyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogMontoProyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogMontoProyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogMontoProyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogMontoProyectoAggregateArgs>(args: Subset<T, LogMontoProyectoAggregateArgs>): Prisma.PrismaPromise<GetLogMontoProyectoAggregateType<T>>

    /**
     * Group by LogMontoProyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogMontoProyectoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogMontoProyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogMontoProyectoGroupByArgs['orderBy'] }
        : { orderBy?: LogMontoProyectoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogMontoProyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogMontoProyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogMontoProyecto model
   */
  readonly fields: LogMontoProyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogMontoProyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogMontoProyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyecto<T extends ProyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProyectoDefaultArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogMontoProyecto model
   */
  interface LogMontoProyectoFieldRefs {
    readonly id_log_montos: FieldRef<"LogMontoProyecto", 'Int'>
    readonly monto: FieldRef<"LogMontoProyecto", 'Decimal'>
    readonly observaciones: FieldRef<"LogMontoProyecto", 'String'>
    readonly fecha: FieldRef<"LogMontoProyecto", 'DateTime'>
    readonly id_proyecto: FieldRef<"LogMontoProyecto", 'Int'>
    readonly id_usuario: FieldRef<"LogMontoProyecto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LogMontoProyecto findUnique
   */
  export type LogMontoProyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which LogMontoProyecto to fetch.
     */
    where: LogMontoProyectoWhereUniqueInput
  }

  /**
   * LogMontoProyecto findUniqueOrThrow
   */
  export type LogMontoProyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which LogMontoProyecto to fetch.
     */
    where: LogMontoProyectoWhereUniqueInput
  }

  /**
   * LogMontoProyecto findFirst
   */
  export type LogMontoProyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which LogMontoProyecto to fetch.
     */
    where?: LogMontoProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogMontoProyectos to fetch.
     */
    orderBy?: LogMontoProyectoOrderByWithRelationInput | LogMontoProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogMontoProyectos.
     */
    cursor?: LogMontoProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogMontoProyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogMontoProyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogMontoProyectos.
     */
    distinct?: LogMontoProyectoScalarFieldEnum | LogMontoProyectoScalarFieldEnum[]
  }

  /**
   * LogMontoProyecto findFirstOrThrow
   */
  export type LogMontoProyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which LogMontoProyecto to fetch.
     */
    where?: LogMontoProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogMontoProyectos to fetch.
     */
    orderBy?: LogMontoProyectoOrderByWithRelationInput | LogMontoProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogMontoProyectos.
     */
    cursor?: LogMontoProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogMontoProyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogMontoProyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogMontoProyectos.
     */
    distinct?: LogMontoProyectoScalarFieldEnum | LogMontoProyectoScalarFieldEnum[]
  }

  /**
   * LogMontoProyecto findMany
   */
  export type LogMontoProyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    /**
     * Filter, which LogMontoProyectos to fetch.
     */
    where?: LogMontoProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogMontoProyectos to fetch.
     */
    orderBy?: LogMontoProyectoOrderByWithRelationInput | LogMontoProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogMontoProyectos.
     */
    cursor?: LogMontoProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogMontoProyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogMontoProyectos.
     */
    skip?: number
    distinct?: LogMontoProyectoScalarFieldEnum | LogMontoProyectoScalarFieldEnum[]
  }

  /**
   * LogMontoProyecto create
   */
  export type LogMontoProyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a LogMontoProyecto.
     */
    data: XOR<LogMontoProyectoCreateInput, LogMontoProyectoUncheckedCreateInput>
  }

  /**
   * LogMontoProyecto createMany
   */
  export type LogMontoProyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogMontoProyectos.
     */
    data: LogMontoProyectoCreateManyInput | LogMontoProyectoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogMontoProyecto createManyAndReturn
   */
  export type LogMontoProyectoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * The data used to create many LogMontoProyectos.
     */
    data: LogMontoProyectoCreateManyInput | LogMontoProyectoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogMontoProyecto update
   */
  export type LogMontoProyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a LogMontoProyecto.
     */
    data: XOR<LogMontoProyectoUpdateInput, LogMontoProyectoUncheckedUpdateInput>
    /**
     * Choose, which LogMontoProyecto to update.
     */
    where: LogMontoProyectoWhereUniqueInput
  }

  /**
   * LogMontoProyecto updateMany
   */
  export type LogMontoProyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogMontoProyectos.
     */
    data: XOR<LogMontoProyectoUpdateManyMutationInput, LogMontoProyectoUncheckedUpdateManyInput>
    /**
     * Filter which LogMontoProyectos to update
     */
    where?: LogMontoProyectoWhereInput
    /**
     * Limit how many LogMontoProyectos to update.
     */
    limit?: number
  }

  /**
   * LogMontoProyecto updateManyAndReturn
   */
  export type LogMontoProyectoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * The data used to update LogMontoProyectos.
     */
    data: XOR<LogMontoProyectoUpdateManyMutationInput, LogMontoProyectoUncheckedUpdateManyInput>
    /**
     * Filter which LogMontoProyectos to update
     */
    where?: LogMontoProyectoWhereInput
    /**
     * Limit how many LogMontoProyectos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogMontoProyecto upsert
   */
  export type LogMontoProyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the LogMontoProyecto to update in case it exists.
     */
    where: LogMontoProyectoWhereUniqueInput
    /**
     * In case the LogMontoProyecto found by the `where` argument doesn't exist, create a new LogMontoProyecto with this data.
     */
    create: XOR<LogMontoProyectoCreateInput, LogMontoProyectoUncheckedCreateInput>
    /**
     * In case the LogMontoProyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogMontoProyectoUpdateInput, LogMontoProyectoUncheckedUpdateInput>
  }

  /**
   * LogMontoProyecto delete
   */
  export type LogMontoProyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
    /**
     * Filter which LogMontoProyecto to delete.
     */
    where: LogMontoProyectoWhereUniqueInput
  }

  /**
   * LogMontoProyecto deleteMany
   */
  export type LogMontoProyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogMontoProyectos to delete
     */
    where?: LogMontoProyectoWhereInput
    /**
     * Limit how many LogMontoProyectos to delete.
     */
    limit?: number
  }

  /**
   * LogMontoProyecto without action
   */
  export type LogMontoProyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogMontoProyecto
     */
    select?: LogMontoProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogMontoProyecto
     */
    omit?: LogMontoProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogMontoProyectoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RolScalarFieldEnum: {
    id_rol: 'id_rol',
    nombre: 'nombre'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    apellido: 'apellido',
    correo: 'correo',
    contrasena: 'contrasena',
    activo: 'activo',
    id_rol: 'id_rol'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EmpresaScalarFieldEnum: {
    id_empresa: 'id_empresa',
    nombre: 'nombre',
    direccion: 'direccion'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const EstadoClienteScalarFieldEnum: {
    id_estado_cliente: 'id_estado_cliente',
    estado: 'estado'
  };

  export type EstadoClienteScalarFieldEnum = (typeof EstadoClienteScalarFieldEnum)[keyof typeof EstadoClienteScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id_cliente: 'id_cliente',
    nombre: 'nombre',
    apellido: 'apellido',
    correo: 'correo',
    telefono: 'telefono',
    id_empresa: 'id_empresa',
    id_estado_cliente: 'id_estado_cliente'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ConsultorScalarFieldEnum: {
    id_consultor: 'id_consultor',
    nombre: 'nombre',
    telefono: 'telefono',
    correo: 'correo',
    activo: 'activo',
    id_usuario: 'id_usuario'
  };

  export type ConsultorScalarFieldEnum = (typeof ConsultorScalarFieldEnum)[keyof typeof ConsultorScalarFieldEnum]


  export const EstadoProyectoScalarFieldEnum: {
    id_estado_proyecto: 'id_estado_proyecto',
    estado: 'estado'
  };

  export type EstadoProyectoScalarFieldEnum = (typeof EstadoProyectoScalarFieldEnum)[keyof typeof EstadoProyectoScalarFieldEnum]


  export const ProyectoScalarFieldEnum: {
    id_proyecto: 'id_proyecto',
    no_proyecto: 'no_proyecto',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    id_cliente: 'id_cliente',
    id_consultor: 'id_consultor',
    id_estado_proyecto: 'id_estado_proyecto'
  };

  export type ProyectoScalarFieldEnum = (typeof ProyectoScalarFieldEnum)[keyof typeof ProyectoScalarFieldEnum]


  export const PrioridadScalarFieldEnum: {
    id_prioridad: 'id_prioridad',
    nombre_prioridad: 'nombre_prioridad'
  };

  export type PrioridadScalarFieldEnum = (typeof PrioridadScalarFieldEnum)[keyof typeof PrioridadScalarFieldEnum]


  export const BitacoraScalarFieldEnum: {
    id_bitacora: 'id_bitacora',
    fecha: 'fecha',
    observaciones: 'observaciones',
    id_estado_proyecto: 'id_estado_proyecto',
    id_proyecto: 'id_proyecto',
    id_usuario: 'id_usuario',
    id_prioridad: 'id_prioridad'
  };

  export type BitacoraScalarFieldEnum = (typeof BitacoraScalarFieldEnum)[keyof typeof BitacoraScalarFieldEnum]


  export const LogMontoProyectoScalarFieldEnum: {
    id_log_montos: 'id_log_montos',
    monto: 'monto',
    observaciones: 'observaciones',
    fecha: 'fecha',
    id_proyecto: 'id_proyecto',
    id_usuario: 'id_usuario'
  };

  export type LogMontoProyectoScalarFieldEnum = (typeof LogMontoProyectoScalarFieldEnum)[keyof typeof LogMontoProyectoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id_rol?: IntFilter<"Rol"> | number
    nombre?: StringFilter<"Rol"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: number
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    nombre?: StringFilter<"Rol"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id_rol">

  export type RolOrderByWithAggregationInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id_rol?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: StringWithAggregatesFilter<"Rol"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    id_rol?: IntFilter<"Usuario"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    consultor?: XOR<ConsultorNullableScalarRelationFilter, ConsultorWhereInput> | null
    bitacoras?: BitacoraListRelationFilter
    log_montos?: LogMontoProyectoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    activo?: SortOrder
    id_rol?: SortOrder
    rol?: RolOrderByWithRelationInput
    consultor?: ConsultorOrderByWithRelationInput
    bitacoras?: BitacoraOrderByRelationAggregateInput
    log_montos?: LogMontoProyectoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    id_rol?: IntFilter<"Usuario"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    consultor?: XOR<ConsultorNullableScalarRelationFilter, ConsultorWhereInput> | null
    bitacoras?: BitacoraListRelationFilter
    log_montos?: LogMontoProyectoListRelationFilter
  }, "id_usuario" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    activo?: SortOrder
    id_rol?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    id_rol?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id_empresa?: IntFilter<"Empresa"> | number
    nombre?: StringFilter<"Empresa"> | string
    direccion?: StringNullableFilter<"Empresa"> | string | null
    clientes?: ClienteListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id_empresa?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    clientes?: ClienteOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id_empresa?: number
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    nombre?: StringFilter<"Empresa"> | string
    direccion?: StringNullableFilter<"Empresa"> | string | null
    clientes?: ClienteListRelationFilter
  }, "id_empresa">

  export type EmpresaOrderByWithAggregationInput = {
    id_empresa?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _avg?: EmpresaAvgOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
    _sum?: EmpresaSumOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id_empresa?: IntWithAggregatesFilter<"Empresa"> | number
    nombre?: StringWithAggregatesFilter<"Empresa"> | string
    direccion?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
  }

  export type EstadoClienteWhereInput = {
    AND?: EstadoClienteWhereInput | EstadoClienteWhereInput[]
    OR?: EstadoClienteWhereInput[]
    NOT?: EstadoClienteWhereInput | EstadoClienteWhereInput[]
    id_estado_cliente?: IntFilter<"EstadoCliente"> | number
    estado?: StringFilter<"EstadoCliente"> | string
    clientes?: ClienteListRelationFilter
  }

  export type EstadoClienteOrderByWithRelationInput = {
    id_estado_cliente?: SortOrder
    estado?: SortOrder
    clientes?: ClienteOrderByRelationAggregateInput
  }

  export type EstadoClienteWhereUniqueInput = Prisma.AtLeast<{
    id_estado_cliente?: number
    AND?: EstadoClienteWhereInput | EstadoClienteWhereInput[]
    OR?: EstadoClienteWhereInput[]
    NOT?: EstadoClienteWhereInput | EstadoClienteWhereInput[]
    estado?: StringFilter<"EstadoCliente"> | string
    clientes?: ClienteListRelationFilter
  }, "id_estado_cliente">

  export type EstadoClienteOrderByWithAggregationInput = {
    id_estado_cliente?: SortOrder
    estado?: SortOrder
    _count?: EstadoClienteCountOrderByAggregateInput
    _avg?: EstadoClienteAvgOrderByAggregateInput
    _max?: EstadoClienteMaxOrderByAggregateInput
    _min?: EstadoClienteMinOrderByAggregateInput
    _sum?: EstadoClienteSumOrderByAggregateInput
  }

  export type EstadoClienteScalarWhereWithAggregatesInput = {
    AND?: EstadoClienteScalarWhereWithAggregatesInput | EstadoClienteScalarWhereWithAggregatesInput[]
    OR?: EstadoClienteScalarWhereWithAggregatesInput[]
    NOT?: EstadoClienteScalarWhereWithAggregatesInput | EstadoClienteScalarWhereWithAggregatesInput[]
    id_estado_cliente?: IntWithAggregatesFilter<"EstadoCliente"> | number
    estado?: StringWithAggregatesFilter<"EstadoCliente"> | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id_cliente?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    apellido?: StringFilter<"Cliente"> | string
    correo?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    id_empresa?: IntFilter<"Cliente"> | number
    id_estado_cliente?: IntFilter<"Cliente"> | number
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    estado_cliente?: XOR<EstadoClienteScalarRelationFilter, EstadoClienteWhereInput>
    proyectos?: ProyectoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    id_empresa?: SortOrder
    id_estado_cliente?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    estado_cliente?: EstadoClienteOrderByWithRelationInput
    proyectos?: ProyectoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    correo?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    apellido?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    id_empresa?: IntFilter<"Cliente"> | number
    id_estado_cliente?: IntFilter<"Cliente"> | number
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    estado_cliente?: XOR<EstadoClienteScalarRelationFilter, EstadoClienteWhereInput>
    proyectos?: ProyectoListRelationFilter
  }, "id_cliente" | "correo">

  export type ClienteOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    id_empresa?: SortOrder
    id_estado_cliente?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    apellido?: StringWithAggregatesFilter<"Cliente"> | string
    correo?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    id_empresa?: IntWithAggregatesFilter<"Cliente"> | number
    id_estado_cliente?: IntWithAggregatesFilter<"Cliente"> | number
  }

  export type ConsultorWhereInput = {
    AND?: ConsultorWhereInput | ConsultorWhereInput[]
    OR?: ConsultorWhereInput[]
    NOT?: ConsultorWhereInput | ConsultorWhereInput[]
    id_consultor?: IntFilter<"Consultor"> | number
    nombre?: StringFilter<"Consultor"> | string
    telefono?: StringNullableFilter<"Consultor"> | string | null
    correo?: StringNullableFilter<"Consultor"> | string | null
    activo?: BoolFilter<"Consultor"> | boolean
    id_usuario?: IntNullableFilter<"Consultor"> | number | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    proyectos?: ProyectoListRelationFilter
  }

  export type ConsultorOrderByWithRelationInput = {
    id_consultor?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    activo?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    proyectos?: ProyectoOrderByRelationAggregateInput
  }

  export type ConsultorWhereUniqueInput = Prisma.AtLeast<{
    id_consultor?: number
    correo?: string
    id_usuario?: number
    AND?: ConsultorWhereInput | ConsultorWhereInput[]
    OR?: ConsultorWhereInput[]
    NOT?: ConsultorWhereInput | ConsultorWhereInput[]
    nombre?: StringFilter<"Consultor"> | string
    telefono?: StringNullableFilter<"Consultor"> | string | null
    activo?: BoolFilter<"Consultor"> | boolean
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    proyectos?: ProyectoListRelationFilter
  }, "id_consultor" | "correo" | "id_usuario">

  export type ConsultorOrderByWithAggregationInput = {
    id_consultor?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    activo?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: ConsultorCountOrderByAggregateInput
    _avg?: ConsultorAvgOrderByAggregateInput
    _max?: ConsultorMaxOrderByAggregateInput
    _min?: ConsultorMinOrderByAggregateInput
    _sum?: ConsultorSumOrderByAggregateInput
  }

  export type ConsultorScalarWhereWithAggregatesInput = {
    AND?: ConsultorScalarWhereWithAggregatesInput | ConsultorScalarWhereWithAggregatesInput[]
    OR?: ConsultorScalarWhereWithAggregatesInput[]
    NOT?: ConsultorScalarWhereWithAggregatesInput | ConsultorScalarWhereWithAggregatesInput[]
    id_consultor?: IntWithAggregatesFilter<"Consultor"> | number
    nombre?: StringWithAggregatesFilter<"Consultor"> | string
    telefono?: StringNullableWithAggregatesFilter<"Consultor"> | string | null
    correo?: StringNullableWithAggregatesFilter<"Consultor"> | string | null
    activo?: BoolWithAggregatesFilter<"Consultor"> | boolean
    id_usuario?: IntNullableWithAggregatesFilter<"Consultor"> | number | null
  }

  export type EstadoProyectoWhereInput = {
    AND?: EstadoProyectoWhereInput | EstadoProyectoWhereInput[]
    OR?: EstadoProyectoWhereInput[]
    NOT?: EstadoProyectoWhereInput | EstadoProyectoWhereInput[]
    id_estado_proyecto?: IntFilter<"EstadoProyecto"> | number
    estado?: StringFilter<"EstadoProyecto"> | string
    proyectos?: ProyectoListRelationFilter
    bitacoras?: BitacoraListRelationFilter
  }

  export type EstadoProyectoOrderByWithRelationInput = {
    id_estado_proyecto?: SortOrder
    estado?: SortOrder
    proyectos?: ProyectoOrderByRelationAggregateInput
    bitacoras?: BitacoraOrderByRelationAggregateInput
  }

  export type EstadoProyectoWhereUniqueInput = Prisma.AtLeast<{
    id_estado_proyecto?: number
    AND?: EstadoProyectoWhereInput | EstadoProyectoWhereInput[]
    OR?: EstadoProyectoWhereInput[]
    NOT?: EstadoProyectoWhereInput | EstadoProyectoWhereInput[]
    estado?: StringFilter<"EstadoProyecto"> | string
    proyectos?: ProyectoListRelationFilter
    bitacoras?: BitacoraListRelationFilter
  }, "id_estado_proyecto">

  export type EstadoProyectoOrderByWithAggregationInput = {
    id_estado_proyecto?: SortOrder
    estado?: SortOrder
    _count?: EstadoProyectoCountOrderByAggregateInput
    _avg?: EstadoProyectoAvgOrderByAggregateInput
    _max?: EstadoProyectoMaxOrderByAggregateInput
    _min?: EstadoProyectoMinOrderByAggregateInput
    _sum?: EstadoProyectoSumOrderByAggregateInput
  }

  export type EstadoProyectoScalarWhereWithAggregatesInput = {
    AND?: EstadoProyectoScalarWhereWithAggregatesInput | EstadoProyectoScalarWhereWithAggregatesInput[]
    OR?: EstadoProyectoScalarWhereWithAggregatesInput[]
    NOT?: EstadoProyectoScalarWhereWithAggregatesInput | EstadoProyectoScalarWhereWithAggregatesInput[]
    id_estado_proyecto?: IntWithAggregatesFilter<"EstadoProyecto"> | number
    estado?: StringWithAggregatesFilter<"EstadoProyecto"> | string
  }

  export type ProyectoWhereInput = {
    AND?: ProyectoWhereInput | ProyectoWhereInput[]
    OR?: ProyectoWhereInput[]
    NOT?: ProyectoWhereInput | ProyectoWhereInput[]
    id_proyecto?: IntFilter<"Proyecto"> | number
    no_proyecto?: StringFilter<"Proyecto"> | string
    nombre?: StringNullableFilter<"Proyecto"> | string | null
    descripcion?: StringNullableFilter<"Proyecto"> | string | null
    fecha_inicio?: DateTimeFilter<"Proyecto"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"Proyecto"> | Date | string | null
    id_cliente?: IntFilter<"Proyecto"> | number
    id_consultor?: IntFilter<"Proyecto"> | number
    id_estado_proyecto?: IntFilter<"Proyecto"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    consultor?: XOR<ConsultorScalarRelationFilter, ConsultorWhereInput>
    estado_proyecto?: XOR<EstadoProyectoScalarRelationFilter, EstadoProyectoWhereInput>
    bitacoras?: BitacoraListRelationFilter
    log_montos?: LogMontoProyectoListRelationFilter
  }

  export type ProyectoOrderByWithRelationInput = {
    id_proyecto?: SortOrder
    no_proyecto?: SortOrder
    nombre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    id_cliente?: SortOrder
    id_consultor?: SortOrder
    id_estado_proyecto?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    consultor?: ConsultorOrderByWithRelationInput
    estado_proyecto?: EstadoProyectoOrderByWithRelationInput
    bitacoras?: BitacoraOrderByRelationAggregateInput
    log_montos?: LogMontoProyectoOrderByRelationAggregateInput
  }

  export type ProyectoWhereUniqueInput = Prisma.AtLeast<{
    id_proyecto?: number
    no_proyecto?: string
    AND?: ProyectoWhereInput | ProyectoWhereInput[]
    OR?: ProyectoWhereInput[]
    NOT?: ProyectoWhereInput | ProyectoWhereInput[]
    nombre?: StringNullableFilter<"Proyecto"> | string | null
    descripcion?: StringNullableFilter<"Proyecto"> | string | null
    fecha_inicio?: DateTimeFilter<"Proyecto"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"Proyecto"> | Date | string | null
    id_cliente?: IntFilter<"Proyecto"> | number
    id_consultor?: IntFilter<"Proyecto"> | number
    id_estado_proyecto?: IntFilter<"Proyecto"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    consultor?: XOR<ConsultorScalarRelationFilter, ConsultorWhereInput>
    estado_proyecto?: XOR<EstadoProyectoScalarRelationFilter, EstadoProyectoWhereInput>
    bitacoras?: BitacoraListRelationFilter
    log_montos?: LogMontoProyectoListRelationFilter
  }, "id_proyecto" | "no_proyecto">

  export type ProyectoOrderByWithAggregationInput = {
    id_proyecto?: SortOrder
    no_proyecto?: SortOrder
    nombre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    id_cliente?: SortOrder
    id_consultor?: SortOrder
    id_estado_proyecto?: SortOrder
    _count?: ProyectoCountOrderByAggregateInput
    _avg?: ProyectoAvgOrderByAggregateInput
    _max?: ProyectoMaxOrderByAggregateInput
    _min?: ProyectoMinOrderByAggregateInput
    _sum?: ProyectoSumOrderByAggregateInput
  }

  export type ProyectoScalarWhereWithAggregatesInput = {
    AND?: ProyectoScalarWhereWithAggregatesInput | ProyectoScalarWhereWithAggregatesInput[]
    OR?: ProyectoScalarWhereWithAggregatesInput[]
    NOT?: ProyectoScalarWhereWithAggregatesInput | ProyectoScalarWhereWithAggregatesInput[]
    id_proyecto?: IntWithAggregatesFilter<"Proyecto"> | number
    no_proyecto?: StringWithAggregatesFilter<"Proyecto"> | string
    nombre?: StringNullableWithAggregatesFilter<"Proyecto"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"Proyecto"> | string | null
    fecha_inicio?: DateTimeWithAggregatesFilter<"Proyecto"> | Date | string
    fecha_fin?: DateTimeNullableWithAggregatesFilter<"Proyecto"> | Date | string | null
    id_cliente?: IntWithAggregatesFilter<"Proyecto"> | number
    id_consultor?: IntWithAggregatesFilter<"Proyecto"> | number
    id_estado_proyecto?: IntWithAggregatesFilter<"Proyecto"> | number
  }

  export type PrioridadWhereInput = {
    AND?: PrioridadWhereInput | PrioridadWhereInput[]
    OR?: PrioridadWhereInput[]
    NOT?: PrioridadWhereInput | PrioridadWhereInput[]
    id_prioridad?: IntFilter<"Prioridad"> | number
    nombre_prioridad?: StringFilter<"Prioridad"> | string
    bitacoras?: BitacoraListRelationFilter
  }

  export type PrioridadOrderByWithRelationInput = {
    id_prioridad?: SortOrder
    nombre_prioridad?: SortOrder
    bitacoras?: BitacoraOrderByRelationAggregateInput
  }

  export type PrioridadWhereUniqueInput = Prisma.AtLeast<{
    id_prioridad?: number
    AND?: PrioridadWhereInput | PrioridadWhereInput[]
    OR?: PrioridadWhereInput[]
    NOT?: PrioridadWhereInput | PrioridadWhereInput[]
    nombre_prioridad?: StringFilter<"Prioridad"> | string
    bitacoras?: BitacoraListRelationFilter
  }, "id_prioridad">

  export type PrioridadOrderByWithAggregationInput = {
    id_prioridad?: SortOrder
    nombre_prioridad?: SortOrder
    _count?: PrioridadCountOrderByAggregateInput
    _avg?: PrioridadAvgOrderByAggregateInput
    _max?: PrioridadMaxOrderByAggregateInput
    _min?: PrioridadMinOrderByAggregateInput
    _sum?: PrioridadSumOrderByAggregateInput
  }

  export type PrioridadScalarWhereWithAggregatesInput = {
    AND?: PrioridadScalarWhereWithAggregatesInput | PrioridadScalarWhereWithAggregatesInput[]
    OR?: PrioridadScalarWhereWithAggregatesInput[]
    NOT?: PrioridadScalarWhereWithAggregatesInput | PrioridadScalarWhereWithAggregatesInput[]
    id_prioridad?: IntWithAggregatesFilter<"Prioridad"> | number
    nombre_prioridad?: StringWithAggregatesFilter<"Prioridad"> | string
  }

  export type BitacoraWhereInput = {
    AND?: BitacoraWhereInput | BitacoraWhereInput[]
    OR?: BitacoraWhereInput[]
    NOT?: BitacoraWhereInput | BitacoraWhereInput[]
    id_bitacora?: IntFilter<"Bitacora"> | number
    fecha?: DateTimeFilter<"Bitacora"> | Date | string
    observaciones?: StringNullableFilter<"Bitacora"> | string | null
    id_estado_proyecto?: IntFilter<"Bitacora"> | number
    id_proyecto?: IntFilter<"Bitacora"> | number
    id_usuario?: IntFilter<"Bitacora"> | number
    id_prioridad?: IntFilter<"Bitacora"> | number
    estado_proyecto?: XOR<EstadoProyectoScalarRelationFilter, EstadoProyectoWhereInput>
    proyecto?: XOR<ProyectoScalarRelationFilter, ProyectoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    prioridad?: XOR<PrioridadScalarRelationFilter, PrioridadWhereInput>
  }

  export type BitacoraOrderByWithRelationInput = {
    id_bitacora?: SortOrder
    fecha?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    id_estado_proyecto?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    id_prioridad?: SortOrder
    estado_proyecto?: EstadoProyectoOrderByWithRelationInput
    proyecto?: ProyectoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    prioridad?: PrioridadOrderByWithRelationInput
  }

  export type BitacoraWhereUniqueInput = Prisma.AtLeast<{
    id_bitacora?: number
    AND?: BitacoraWhereInput | BitacoraWhereInput[]
    OR?: BitacoraWhereInput[]
    NOT?: BitacoraWhereInput | BitacoraWhereInput[]
    fecha?: DateTimeFilter<"Bitacora"> | Date | string
    observaciones?: StringNullableFilter<"Bitacora"> | string | null
    id_estado_proyecto?: IntFilter<"Bitacora"> | number
    id_proyecto?: IntFilter<"Bitacora"> | number
    id_usuario?: IntFilter<"Bitacora"> | number
    id_prioridad?: IntFilter<"Bitacora"> | number
    estado_proyecto?: XOR<EstadoProyectoScalarRelationFilter, EstadoProyectoWhereInput>
    proyecto?: XOR<ProyectoScalarRelationFilter, ProyectoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    prioridad?: XOR<PrioridadScalarRelationFilter, PrioridadWhereInput>
  }, "id_bitacora">

  export type BitacoraOrderByWithAggregationInput = {
    id_bitacora?: SortOrder
    fecha?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    id_estado_proyecto?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    id_prioridad?: SortOrder
    _count?: BitacoraCountOrderByAggregateInput
    _avg?: BitacoraAvgOrderByAggregateInput
    _max?: BitacoraMaxOrderByAggregateInput
    _min?: BitacoraMinOrderByAggregateInput
    _sum?: BitacoraSumOrderByAggregateInput
  }

  export type BitacoraScalarWhereWithAggregatesInput = {
    AND?: BitacoraScalarWhereWithAggregatesInput | BitacoraScalarWhereWithAggregatesInput[]
    OR?: BitacoraScalarWhereWithAggregatesInput[]
    NOT?: BitacoraScalarWhereWithAggregatesInput | BitacoraScalarWhereWithAggregatesInput[]
    id_bitacora?: IntWithAggregatesFilter<"Bitacora"> | number
    fecha?: DateTimeWithAggregatesFilter<"Bitacora"> | Date | string
    observaciones?: StringNullableWithAggregatesFilter<"Bitacora"> | string | null
    id_estado_proyecto?: IntWithAggregatesFilter<"Bitacora"> | number
    id_proyecto?: IntWithAggregatesFilter<"Bitacora"> | number
    id_usuario?: IntWithAggregatesFilter<"Bitacora"> | number
    id_prioridad?: IntWithAggregatesFilter<"Bitacora"> | number
  }

  export type LogMontoProyectoWhereInput = {
    AND?: LogMontoProyectoWhereInput | LogMontoProyectoWhereInput[]
    OR?: LogMontoProyectoWhereInput[]
    NOT?: LogMontoProyectoWhereInput | LogMontoProyectoWhereInput[]
    id_log_montos?: IntFilter<"LogMontoProyecto"> | number
    monto?: DecimalFilter<"LogMontoProyecto"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"LogMontoProyecto"> | string | null
    fecha?: DateTimeFilter<"LogMontoProyecto"> | Date | string
    id_proyecto?: IntFilter<"LogMontoProyecto"> | number
    id_usuario?: IntFilter<"LogMontoProyecto"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, ProyectoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type LogMontoProyectoOrderByWithRelationInput = {
    id_log_montos?: SortOrder
    monto?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fecha?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    proyecto?: ProyectoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type LogMontoProyectoWhereUniqueInput = Prisma.AtLeast<{
    id_log_montos?: number
    AND?: LogMontoProyectoWhereInput | LogMontoProyectoWhereInput[]
    OR?: LogMontoProyectoWhereInput[]
    NOT?: LogMontoProyectoWhereInput | LogMontoProyectoWhereInput[]
    monto?: DecimalFilter<"LogMontoProyecto"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"LogMontoProyecto"> | string | null
    fecha?: DateTimeFilter<"LogMontoProyecto"> | Date | string
    id_proyecto?: IntFilter<"LogMontoProyecto"> | number
    id_usuario?: IntFilter<"LogMontoProyecto"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, ProyectoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_log_montos">

  export type LogMontoProyectoOrderByWithAggregationInput = {
    id_log_montos?: SortOrder
    monto?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fecha?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    _count?: LogMontoProyectoCountOrderByAggregateInput
    _avg?: LogMontoProyectoAvgOrderByAggregateInput
    _max?: LogMontoProyectoMaxOrderByAggregateInput
    _min?: LogMontoProyectoMinOrderByAggregateInput
    _sum?: LogMontoProyectoSumOrderByAggregateInput
  }

  export type LogMontoProyectoScalarWhereWithAggregatesInput = {
    AND?: LogMontoProyectoScalarWhereWithAggregatesInput | LogMontoProyectoScalarWhereWithAggregatesInput[]
    OR?: LogMontoProyectoScalarWhereWithAggregatesInput[]
    NOT?: LogMontoProyectoScalarWhereWithAggregatesInput | LogMontoProyectoScalarWhereWithAggregatesInput[]
    id_log_montos?: IntWithAggregatesFilter<"LogMontoProyecto"> | number
    monto?: DecimalWithAggregatesFilter<"LogMontoProyecto"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableWithAggregatesFilter<"LogMontoProyecto"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"LogMontoProyecto"> | Date | string
    id_proyecto?: IntWithAggregatesFilter<"LogMontoProyecto"> | number
    id_usuario?: IntWithAggregatesFilter<"LogMontoProyecto"> | number
  }

  export type RolCreateInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id_rol?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id_rol?: number
    nombre: string
  }

  export type RolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateManyInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    rol: RolCreateNestedOneWithoutUsuariosInput
    consultor?: ConsultorCreateNestedOneWithoutUsuarioInput
    bitacoras?: BitacoraCreateNestedManyWithoutUsuarioInput
    log_montos?: LogMontoProyectoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    id_rol: number
    consultor?: ConsultorUncheckedCreateNestedOneWithoutUsuarioInput
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
    log_montos?: LogMontoProyectoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    consultor?: ConsultorUpdateOneWithoutUsuarioNestedInput
    bitacoras?: BitacoraUpdateManyWithoutUsuarioNestedInput
    log_montos?: LogMontoProyectoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_rol?: IntFieldUpdateOperationsInput | number
    consultor?: ConsultorUncheckedUpdateOneWithoutUsuarioNestedInput
    bitacoras?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
    log_montos?: LogMontoProyectoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    id_rol: number
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_rol?: IntFieldUpdateOperationsInput | number
  }

  export type EmpresaCreateInput = {
    nombre: string
    direccion?: string | null
    clientes?: ClienteCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id_empresa?: number
    nombre: string
    direccion?: string | null
    clientes?: ClienteUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    clientes?: ClienteUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id_empresa?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    clientes?: ClienteUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id_empresa?: number
    nombre: string
    direccion?: string | null
  }

  export type EmpresaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id_empresa?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstadoClienteCreateInput = {
    estado: string
    clientes?: ClienteCreateNestedManyWithoutEstado_clienteInput
  }

  export type EstadoClienteUncheckedCreateInput = {
    id_estado_cliente?: number
    estado: string
    clientes?: ClienteUncheckedCreateNestedManyWithoutEstado_clienteInput
  }

  export type EstadoClienteUpdateInput = {
    estado?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUpdateManyWithoutEstado_clienteNestedInput
  }

  export type EstadoClienteUncheckedUpdateInput = {
    id_estado_cliente?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUncheckedUpdateManyWithoutEstado_clienteNestedInput
  }

  export type EstadoClienteCreateManyInput = {
    id_estado_cliente?: number
    estado: string
  }

  export type EstadoClienteUpdateManyMutationInput = {
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoClienteUncheckedUpdateManyInput = {
    id_estado_cliente?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateInput = {
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    empresa: EmpresaCreateNestedOneWithoutClientesInput
    estado_cliente: EstadoClienteCreateNestedOneWithoutClientesInput
    proyectos?: ProyectoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    id_empresa: number
    id_estado_cliente: number
    proyectos?: ProyectoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutClientesNestedInput
    estado_cliente?: EstadoClienteUpdateOneRequiredWithoutClientesNestedInput
    proyectos?: ProyectoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: IntFieldUpdateOperationsInput | number
    id_estado_cliente?: IntFieldUpdateOperationsInput | number
    proyectos?: ProyectoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    id_empresa: number
    id_estado_cliente: number
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: IntFieldUpdateOperationsInput | number
    id_estado_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultorCreateInput = {
    nombre: string
    telefono?: string | null
    correo?: string | null
    activo?: boolean
    usuario?: UsuarioCreateNestedOneWithoutConsultorInput
    proyectos?: ProyectoCreateNestedManyWithoutConsultorInput
  }

  export type ConsultorUncheckedCreateInput = {
    id_consultor?: number
    nombre: string
    telefono?: string | null
    correo?: string | null
    activo?: boolean
    id_usuario?: number | null
    proyectos?: ProyectoUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type ConsultorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneWithoutConsultorNestedInput
    proyectos?: ProyectoUpdateManyWithoutConsultorNestedInput
  }

  export type ConsultorUncheckedUpdateInput = {
    id_consultor?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    proyectos?: ProyectoUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type ConsultorCreateManyInput = {
    id_consultor?: number
    nombre: string
    telefono?: string | null
    correo?: string | null
    activo?: boolean
    id_usuario?: number | null
  }

  export type ConsultorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConsultorUncheckedUpdateManyInput = {
    id_consultor?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EstadoProyectoCreateInput = {
    estado: string
    proyectos?: ProyectoCreateNestedManyWithoutEstado_proyectoInput
    bitacoras?: BitacoraCreateNestedManyWithoutEstado_proyectoInput
  }

  export type EstadoProyectoUncheckedCreateInput = {
    id_estado_proyecto?: number
    estado: string
    proyectos?: ProyectoUncheckedCreateNestedManyWithoutEstado_proyectoInput
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutEstado_proyectoInput
  }

  export type EstadoProyectoUpdateInput = {
    estado?: StringFieldUpdateOperationsInput | string
    proyectos?: ProyectoUpdateManyWithoutEstado_proyectoNestedInput
    bitacoras?: BitacoraUpdateManyWithoutEstado_proyectoNestedInput
  }

  export type EstadoProyectoUncheckedUpdateInput = {
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    proyectos?: ProyectoUncheckedUpdateManyWithoutEstado_proyectoNestedInput
    bitacoras?: BitacoraUncheckedUpdateManyWithoutEstado_proyectoNestedInput
  }

  export type EstadoProyectoCreateManyInput = {
    id_estado_proyecto?: number
    estado: string
  }

  export type EstadoProyectoUpdateManyMutationInput = {
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoProyectoUncheckedUpdateManyInput = {
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ProyectoCreateInput = {
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutProyectosInput
    consultor: ConsultorCreateNestedOneWithoutProyectosInput
    estado_proyecto: EstadoProyectoCreateNestedOneWithoutProyectosInput
    bitacoras?: BitacoraCreateNestedManyWithoutProyectoInput
    log_montos?: LogMontoProyectoCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUncheckedCreateInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_cliente: number
    id_consultor: number
    id_estado_proyecto: number
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutProyectoInput
    log_montos?: LogMontoProyectoUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUpdateInput = {
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutProyectosNestedInput
    consultor?: ConsultorUpdateOneRequiredWithoutProyectosNestedInput
    estado_proyecto?: EstadoProyectoUpdateOneRequiredWithoutProyectosNestedInput
    bitacoras?: BitacoraUpdateManyWithoutProyectoNestedInput
    log_montos?: LogMontoProyectoUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_consultor?: IntFieldUpdateOperationsInput | number
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    bitacoras?: BitacoraUncheckedUpdateManyWithoutProyectoNestedInput
    log_montos?: LogMontoProyectoUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoCreateManyInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_cliente: number
    id_consultor: number
    id_estado_proyecto: number
  }

  export type ProyectoUpdateManyMutationInput = {
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProyectoUncheckedUpdateManyInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_consultor?: IntFieldUpdateOperationsInput | number
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type PrioridadCreateInput = {
    nombre_prioridad: string
    bitacoras?: BitacoraCreateNestedManyWithoutPrioridadInput
  }

  export type PrioridadUncheckedCreateInput = {
    id_prioridad?: number
    nombre_prioridad: string
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutPrioridadInput
  }

  export type PrioridadUpdateInput = {
    nombre_prioridad?: StringFieldUpdateOperationsInput | string
    bitacoras?: BitacoraUpdateManyWithoutPrioridadNestedInput
  }

  export type PrioridadUncheckedUpdateInput = {
    id_prioridad?: IntFieldUpdateOperationsInput | number
    nombre_prioridad?: StringFieldUpdateOperationsInput | string
    bitacoras?: BitacoraUncheckedUpdateManyWithoutPrioridadNestedInput
  }

  export type PrioridadCreateManyInput = {
    id_prioridad?: number
    nombre_prioridad: string
  }

  export type PrioridadUpdateManyMutationInput = {
    nombre_prioridad?: StringFieldUpdateOperationsInput | string
  }

  export type PrioridadUncheckedUpdateManyInput = {
    id_prioridad?: IntFieldUpdateOperationsInput | number
    nombre_prioridad?: StringFieldUpdateOperationsInput | string
  }

  export type BitacoraCreateInput = {
    fecha: Date | string
    observaciones?: string | null
    estado_proyecto: EstadoProyectoCreateNestedOneWithoutBitacorasInput
    proyecto: ProyectoCreateNestedOneWithoutBitacorasInput
    usuario: UsuarioCreateNestedOneWithoutBitacorasInput
    prioridad: PrioridadCreateNestedOneWithoutBitacorasInput
  }

  export type BitacoraUncheckedCreateInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_estado_proyecto: number
    id_proyecto: number
    id_usuario: number
    id_prioridad: number
  }

  export type BitacoraUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado_proyecto?: EstadoProyectoUpdateOneRequiredWithoutBitacorasNestedInput
    proyecto?: ProyectoUpdateOneRequiredWithoutBitacorasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutBitacorasNestedInput
    prioridad?: PrioridadUpdateOneRequiredWithoutBitacorasNestedInput
  }

  export type BitacoraUncheckedUpdateInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_prioridad?: IntFieldUpdateOperationsInput | number
  }

  export type BitacoraCreateManyInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_estado_proyecto: number
    id_proyecto: number
    id_usuario: number
    id_prioridad: number
  }

  export type BitacoraUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BitacoraUncheckedUpdateManyInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_prioridad?: IntFieldUpdateOperationsInput | number
  }

  export type LogMontoProyectoCreateInput = {
    monto: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    fecha: Date | string
    proyecto: ProyectoCreateNestedOneWithoutLog_montosInput
    usuario: UsuarioCreateNestedOneWithoutLog_montosInput
  }

  export type LogMontoProyectoUncheckedCreateInput = {
    id_log_montos?: number
    monto: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    fecha: Date | string
    id_proyecto: number
    id_usuario: number
  }

  export type LogMontoProyectoUpdateInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proyecto?: ProyectoUpdateOneRequiredWithoutLog_montosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutLog_montosNestedInput
  }

  export type LogMontoProyectoUncheckedUpdateInput = {
    id_log_montos?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type LogMontoProyectoCreateManyInput = {
    id_log_montos?: number
    monto: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    fecha: Date | string
    id_proyecto: number
    id_usuario: number
  }

  export type LogMontoProyectoUpdateManyMutationInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogMontoProyectoUncheckedUpdateManyInput = {
    id_log_montos?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type ConsultorNullableScalarRelationFilter = {
    is?: ConsultorWhereInput | null
    isNot?: ConsultorWhereInput | null
  }

  export type BitacoraListRelationFilter = {
    every?: BitacoraWhereInput
    some?: BitacoraWhereInput
    none?: BitacoraWhereInput
  }

  export type LogMontoProyectoListRelationFilter = {
    every?: LogMontoProyectoWhereInput
    some?: LogMontoProyectoWhereInput
    none?: LogMontoProyectoWhereInput
  }

  export type BitacoraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogMontoProyectoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    activo?: SortOrder
    id_rol?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    activo?: SortOrder
    id_rol?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    activo?: SortOrder
    id_rol?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id_empresa?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type EmpresaAvgOrderByAggregateInput = {
    id_empresa?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id_empresa?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id_empresa?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type EmpresaSumOrderByAggregateInput = {
    id_empresa?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EstadoClienteCountOrderByAggregateInput = {
    id_estado_cliente?: SortOrder
    estado?: SortOrder
  }

  export type EstadoClienteAvgOrderByAggregateInput = {
    id_estado_cliente?: SortOrder
  }

  export type EstadoClienteMaxOrderByAggregateInput = {
    id_estado_cliente?: SortOrder
    estado?: SortOrder
  }

  export type EstadoClienteMinOrderByAggregateInput = {
    id_estado_cliente?: SortOrder
    estado?: SortOrder
  }

  export type EstadoClienteSumOrderByAggregateInput = {
    id_estado_cliente?: SortOrder
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type EstadoClienteScalarRelationFilter = {
    is?: EstadoClienteWhereInput
    isNot?: EstadoClienteWhereInput
  }

  export type ProyectoListRelationFilter = {
    every?: ProyectoWhereInput
    some?: ProyectoWhereInput
    none?: ProyectoWhereInput
  }

  export type ProyectoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    id_empresa?: SortOrder
    id_estado_cliente?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
    id_empresa?: SortOrder
    id_estado_cliente?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    id_empresa?: SortOrder
    id_estado_cliente?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    id_empresa?: SortOrder
    id_estado_cliente?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id_cliente?: SortOrder
    id_empresa?: SortOrder
    id_estado_cliente?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type ConsultorCountOrderByAggregateInput = {
    id_consultor?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
  }

  export type ConsultorAvgOrderByAggregateInput = {
    id_consultor?: SortOrder
    id_usuario?: SortOrder
  }

  export type ConsultorMaxOrderByAggregateInput = {
    id_consultor?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
  }

  export type ConsultorMinOrderByAggregateInput = {
    id_consultor?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
  }

  export type ConsultorSumOrderByAggregateInput = {
    id_consultor?: SortOrder
    id_usuario?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EstadoProyectoCountOrderByAggregateInput = {
    id_estado_proyecto?: SortOrder
    estado?: SortOrder
  }

  export type EstadoProyectoAvgOrderByAggregateInput = {
    id_estado_proyecto?: SortOrder
  }

  export type EstadoProyectoMaxOrderByAggregateInput = {
    id_estado_proyecto?: SortOrder
    estado?: SortOrder
  }

  export type EstadoProyectoMinOrderByAggregateInput = {
    id_estado_proyecto?: SortOrder
    estado?: SortOrder
  }

  export type EstadoProyectoSumOrderByAggregateInput = {
    id_estado_proyecto?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ConsultorScalarRelationFilter = {
    is?: ConsultorWhereInput
    isNot?: ConsultorWhereInput
  }

  export type EstadoProyectoScalarRelationFilter = {
    is?: EstadoProyectoWhereInput
    isNot?: EstadoProyectoWhereInput
  }

  export type ProyectoCountOrderByAggregateInput = {
    id_proyecto?: SortOrder
    no_proyecto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    id_cliente?: SortOrder
    id_consultor?: SortOrder
    id_estado_proyecto?: SortOrder
  }

  export type ProyectoAvgOrderByAggregateInput = {
    id_proyecto?: SortOrder
    id_cliente?: SortOrder
    id_consultor?: SortOrder
    id_estado_proyecto?: SortOrder
  }

  export type ProyectoMaxOrderByAggregateInput = {
    id_proyecto?: SortOrder
    no_proyecto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    id_cliente?: SortOrder
    id_consultor?: SortOrder
    id_estado_proyecto?: SortOrder
  }

  export type ProyectoMinOrderByAggregateInput = {
    id_proyecto?: SortOrder
    no_proyecto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    id_cliente?: SortOrder
    id_consultor?: SortOrder
    id_estado_proyecto?: SortOrder
  }

  export type ProyectoSumOrderByAggregateInput = {
    id_proyecto?: SortOrder
    id_cliente?: SortOrder
    id_consultor?: SortOrder
    id_estado_proyecto?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PrioridadCountOrderByAggregateInput = {
    id_prioridad?: SortOrder
    nombre_prioridad?: SortOrder
  }

  export type PrioridadAvgOrderByAggregateInput = {
    id_prioridad?: SortOrder
  }

  export type PrioridadMaxOrderByAggregateInput = {
    id_prioridad?: SortOrder
    nombre_prioridad?: SortOrder
  }

  export type PrioridadMinOrderByAggregateInput = {
    id_prioridad?: SortOrder
    nombre_prioridad?: SortOrder
  }

  export type PrioridadSumOrderByAggregateInput = {
    id_prioridad?: SortOrder
  }

  export type ProyectoScalarRelationFilter = {
    is?: ProyectoWhereInput
    isNot?: ProyectoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PrioridadScalarRelationFilter = {
    is?: PrioridadWhereInput
    isNot?: PrioridadWhereInput
  }

  export type BitacoraCountOrderByAggregateInput = {
    id_bitacora?: SortOrder
    fecha?: SortOrder
    observaciones?: SortOrder
    id_estado_proyecto?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    id_prioridad?: SortOrder
  }

  export type BitacoraAvgOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_estado_proyecto?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    id_prioridad?: SortOrder
  }

  export type BitacoraMaxOrderByAggregateInput = {
    id_bitacora?: SortOrder
    fecha?: SortOrder
    observaciones?: SortOrder
    id_estado_proyecto?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    id_prioridad?: SortOrder
  }

  export type BitacoraMinOrderByAggregateInput = {
    id_bitacora?: SortOrder
    fecha?: SortOrder
    observaciones?: SortOrder
    id_estado_proyecto?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    id_prioridad?: SortOrder
  }

  export type BitacoraSumOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_estado_proyecto?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
    id_prioridad?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type LogMontoProyectoCountOrderByAggregateInput = {
    id_log_montos?: SortOrder
    monto?: SortOrder
    observaciones?: SortOrder
    fecha?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type LogMontoProyectoAvgOrderByAggregateInput = {
    id_log_montos?: SortOrder
    monto?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type LogMontoProyectoMaxOrderByAggregateInput = {
    id_log_montos?: SortOrder
    monto?: SortOrder
    observaciones?: SortOrder
    fecha?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type LogMontoProyectoMinOrderByAggregateInput = {
    id_log_montos?: SortOrder
    monto?: SortOrder
    observaciones?: SortOrder
    fecha?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type LogMontoProyectoSumOrderByAggregateInput = {
    id_log_montos?: SortOrder
    monto?: SortOrder
    id_proyecto?: SortOrder
    id_usuario?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type ConsultorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ConsultorCreateWithoutUsuarioInput, ConsultorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ConsultorCreateOrConnectWithoutUsuarioInput
    connect?: ConsultorWhereUniqueInput
  }

  export type BitacoraCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput> | BitacoraCreateWithoutUsuarioInput[] | BitacoraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutUsuarioInput | BitacoraCreateOrConnectWithoutUsuarioInput[]
    createMany?: BitacoraCreateManyUsuarioInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type LogMontoProyectoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogMontoProyectoCreateWithoutUsuarioInput, LogMontoProyectoUncheckedCreateWithoutUsuarioInput> | LogMontoProyectoCreateWithoutUsuarioInput[] | LogMontoProyectoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogMontoProyectoCreateOrConnectWithoutUsuarioInput | LogMontoProyectoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogMontoProyectoCreateManyUsuarioInputEnvelope
    connect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
  }

  export type ConsultorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ConsultorCreateWithoutUsuarioInput, ConsultorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ConsultorCreateOrConnectWithoutUsuarioInput
    connect?: ConsultorWhereUniqueInput
  }

  export type BitacoraUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput> | BitacoraCreateWithoutUsuarioInput[] | BitacoraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutUsuarioInput | BitacoraCreateOrConnectWithoutUsuarioInput[]
    createMany?: BitacoraCreateManyUsuarioInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type LogMontoProyectoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogMontoProyectoCreateWithoutUsuarioInput, LogMontoProyectoUncheckedCreateWithoutUsuarioInput> | LogMontoProyectoCreateWithoutUsuarioInput[] | LogMontoProyectoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogMontoProyectoCreateOrConnectWithoutUsuarioInput | LogMontoProyectoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogMontoProyectoCreateManyUsuarioInputEnvelope
    connect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type ConsultorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ConsultorCreateWithoutUsuarioInput, ConsultorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ConsultorCreateOrConnectWithoutUsuarioInput
    upsert?: ConsultorUpsertWithoutUsuarioInput
    disconnect?: ConsultorWhereInput | boolean
    delete?: ConsultorWhereInput | boolean
    connect?: ConsultorWhereUniqueInput
    update?: XOR<XOR<ConsultorUpdateToOneWithWhereWithoutUsuarioInput, ConsultorUpdateWithoutUsuarioInput>, ConsultorUncheckedUpdateWithoutUsuarioInput>
  }

  export type BitacoraUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput> | BitacoraCreateWithoutUsuarioInput[] | BitacoraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutUsuarioInput | BitacoraCreateOrConnectWithoutUsuarioInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutUsuarioInput | BitacoraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: BitacoraCreateManyUsuarioInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutUsuarioInput | BitacoraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutUsuarioInput | BitacoraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type LogMontoProyectoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogMontoProyectoCreateWithoutUsuarioInput, LogMontoProyectoUncheckedCreateWithoutUsuarioInput> | LogMontoProyectoCreateWithoutUsuarioInput[] | LogMontoProyectoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogMontoProyectoCreateOrConnectWithoutUsuarioInput | LogMontoProyectoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogMontoProyectoUpsertWithWhereUniqueWithoutUsuarioInput | LogMontoProyectoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogMontoProyectoCreateManyUsuarioInputEnvelope
    set?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    disconnect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    delete?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    connect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    update?: LogMontoProyectoUpdateWithWhereUniqueWithoutUsuarioInput | LogMontoProyectoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogMontoProyectoUpdateManyWithWhereWithoutUsuarioInput | LogMontoProyectoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogMontoProyectoScalarWhereInput | LogMontoProyectoScalarWhereInput[]
  }

  export type ConsultorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ConsultorCreateWithoutUsuarioInput, ConsultorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ConsultorCreateOrConnectWithoutUsuarioInput
    upsert?: ConsultorUpsertWithoutUsuarioInput
    disconnect?: ConsultorWhereInput | boolean
    delete?: ConsultorWhereInput | boolean
    connect?: ConsultorWhereUniqueInput
    update?: XOR<XOR<ConsultorUpdateToOneWithWhereWithoutUsuarioInput, ConsultorUpdateWithoutUsuarioInput>, ConsultorUncheckedUpdateWithoutUsuarioInput>
  }

  export type BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput> | BitacoraCreateWithoutUsuarioInput[] | BitacoraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutUsuarioInput | BitacoraCreateOrConnectWithoutUsuarioInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutUsuarioInput | BitacoraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: BitacoraCreateManyUsuarioInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutUsuarioInput | BitacoraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutUsuarioInput | BitacoraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type LogMontoProyectoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogMontoProyectoCreateWithoutUsuarioInput, LogMontoProyectoUncheckedCreateWithoutUsuarioInput> | LogMontoProyectoCreateWithoutUsuarioInput[] | LogMontoProyectoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogMontoProyectoCreateOrConnectWithoutUsuarioInput | LogMontoProyectoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogMontoProyectoUpsertWithWhereUniqueWithoutUsuarioInput | LogMontoProyectoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogMontoProyectoCreateManyUsuarioInputEnvelope
    set?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    disconnect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    delete?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    connect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    update?: LogMontoProyectoUpdateWithWhereUniqueWithoutUsuarioInput | LogMontoProyectoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogMontoProyectoUpdateManyWithWhereWithoutUsuarioInput | LogMontoProyectoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogMontoProyectoScalarWhereInput | LogMontoProyectoScalarWhereInput[]
  }

  export type ClienteCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClienteUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutEmpresaInput | ClienteUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutEmpresaInput | ClienteUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutEmpresaInput | ClienteUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutEmpresaInput | ClienteUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutEmpresaInput | ClienteUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutEmpresaInput | ClienteUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteCreateNestedManyWithoutEstado_clienteInput = {
    create?: XOR<ClienteCreateWithoutEstado_clienteInput, ClienteUncheckedCreateWithoutEstado_clienteInput> | ClienteCreateWithoutEstado_clienteInput[] | ClienteUncheckedCreateWithoutEstado_clienteInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEstado_clienteInput | ClienteCreateOrConnectWithoutEstado_clienteInput[]
    createMany?: ClienteCreateManyEstado_clienteInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutEstado_clienteInput = {
    create?: XOR<ClienteCreateWithoutEstado_clienteInput, ClienteUncheckedCreateWithoutEstado_clienteInput> | ClienteCreateWithoutEstado_clienteInput[] | ClienteUncheckedCreateWithoutEstado_clienteInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEstado_clienteInput | ClienteCreateOrConnectWithoutEstado_clienteInput[]
    createMany?: ClienteCreateManyEstado_clienteInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUpdateManyWithoutEstado_clienteNestedInput = {
    create?: XOR<ClienteCreateWithoutEstado_clienteInput, ClienteUncheckedCreateWithoutEstado_clienteInput> | ClienteCreateWithoutEstado_clienteInput[] | ClienteUncheckedCreateWithoutEstado_clienteInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEstado_clienteInput | ClienteCreateOrConnectWithoutEstado_clienteInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutEstado_clienteInput | ClienteUpsertWithWhereUniqueWithoutEstado_clienteInput[]
    createMany?: ClienteCreateManyEstado_clienteInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutEstado_clienteInput | ClienteUpdateWithWhereUniqueWithoutEstado_clienteInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutEstado_clienteInput | ClienteUpdateManyWithWhereWithoutEstado_clienteInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutEstado_clienteNestedInput = {
    create?: XOR<ClienteCreateWithoutEstado_clienteInput, ClienteUncheckedCreateWithoutEstado_clienteInput> | ClienteCreateWithoutEstado_clienteInput[] | ClienteUncheckedCreateWithoutEstado_clienteInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEstado_clienteInput | ClienteCreateOrConnectWithoutEstado_clienteInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutEstado_clienteInput | ClienteUpsertWithWhereUniqueWithoutEstado_clienteInput[]
    createMany?: ClienteCreateManyEstado_clienteInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutEstado_clienteInput | ClienteUpdateWithWhereUniqueWithoutEstado_clienteInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutEstado_clienteInput | ClienteUpdateManyWithWhereWithoutEstado_clienteInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutClientesInput = {
    create?: XOR<EmpresaCreateWithoutClientesInput, EmpresaUncheckedCreateWithoutClientesInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutClientesInput
    connect?: EmpresaWhereUniqueInput
  }

  export type EstadoClienteCreateNestedOneWithoutClientesInput = {
    create?: XOR<EstadoClienteCreateWithoutClientesInput, EstadoClienteUncheckedCreateWithoutClientesInput>
    connectOrCreate?: EstadoClienteCreateOrConnectWithoutClientesInput
    connect?: EstadoClienteWhereUniqueInput
  }

  export type ProyectoCreateNestedManyWithoutClienteInput = {
    create?: XOR<ProyectoCreateWithoutClienteInput, ProyectoUncheckedCreateWithoutClienteInput> | ProyectoCreateWithoutClienteInput[] | ProyectoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutClienteInput | ProyectoCreateOrConnectWithoutClienteInput[]
    createMany?: ProyectoCreateManyClienteInputEnvelope
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
  }

  export type ProyectoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ProyectoCreateWithoutClienteInput, ProyectoUncheckedCreateWithoutClienteInput> | ProyectoCreateWithoutClienteInput[] | ProyectoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutClienteInput | ProyectoCreateOrConnectWithoutClienteInput[]
    createMany?: ProyectoCreateManyClienteInputEnvelope
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
  }

  export type EmpresaUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<EmpresaCreateWithoutClientesInput, EmpresaUncheckedCreateWithoutClientesInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutClientesInput
    upsert?: EmpresaUpsertWithoutClientesInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutClientesInput, EmpresaUpdateWithoutClientesInput>, EmpresaUncheckedUpdateWithoutClientesInput>
  }

  export type EstadoClienteUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<EstadoClienteCreateWithoutClientesInput, EstadoClienteUncheckedCreateWithoutClientesInput>
    connectOrCreate?: EstadoClienteCreateOrConnectWithoutClientesInput
    upsert?: EstadoClienteUpsertWithoutClientesInput
    connect?: EstadoClienteWhereUniqueInput
    update?: XOR<XOR<EstadoClienteUpdateToOneWithWhereWithoutClientesInput, EstadoClienteUpdateWithoutClientesInput>, EstadoClienteUncheckedUpdateWithoutClientesInput>
  }

  export type ProyectoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ProyectoCreateWithoutClienteInput, ProyectoUncheckedCreateWithoutClienteInput> | ProyectoCreateWithoutClienteInput[] | ProyectoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutClienteInput | ProyectoCreateOrConnectWithoutClienteInput[]
    upsert?: ProyectoUpsertWithWhereUniqueWithoutClienteInput | ProyectoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ProyectoCreateManyClienteInputEnvelope
    set?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    disconnect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    delete?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    update?: ProyectoUpdateWithWhereUniqueWithoutClienteInput | ProyectoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ProyectoUpdateManyWithWhereWithoutClienteInput | ProyectoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ProyectoScalarWhereInput | ProyectoScalarWhereInput[]
  }

  export type ProyectoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ProyectoCreateWithoutClienteInput, ProyectoUncheckedCreateWithoutClienteInput> | ProyectoCreateWithoutClienteInput[] | ProyectoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutClienteInput | ProyectoCreateOrConnectWithoutClienteInput[]
    upsert?: ProyectoUpsertWithWhereUniqueWithoutClienteInput | ProyectoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ProyectoCreateManyClienteInputEnvelope
    set?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    disconnect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    delete?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    update?: ProyectoUpdateWithWhereUniqueWithoutClienteInput | ProyectoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ProyectoUpdateManyWithWhereWithoutClienteInput | ProyectoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ProyectoScalarWhereInput | ProyectoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutConsultorInput = {
    create?: XOR<UsuarioCreateWithoutConsultorInput, UsuarioUncheckedCreateWithoutConsultorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProyectoCreateNestedManyWithoutConsultorInput = {
    create?: XOR<ProyectoCreateWithoutConsultorInput, ProyectoUncheckedCreateWithoutConsultorInput> | ProyectoCreateWithoutConsultorInput[] | ProyectoUncheckedCreateWithoutConsultorInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutConsultorInput | ProyectoCreateOrConnectWithoutConsultorInput[]
    createMany?: ProyectoCreateManyConsultorInputEnvelope
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
  }

  export type ProyectoUncheckedCreateNestedManyWithoutConsultorInput = {
    create?: XOR<ProyectoCreateWithoutConsultorInput, ProyectoUncheckedCreateWithoutConsultorInput> | ProyectoCreateWithoutConsultorInput[] | ProyectoUncheckedCreateWithoutConsultorInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutConsultorInput | ProyectoCreateOrConnectWithoutConsultorInput[]
    createMany?: ProyectoCreateManyConsultorInputEnvelope
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneWithoutConsultorNestedInput = {
    create?: XOR<UsuarioCreateWithoutConsultorInput, UsuarioUncheckedCreateWithoutConsultorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultorInput
    upsert?: UsuarioUpsertWithoutConsultorInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutConsultorInput, UsuarioUpdateWithoutConsultorInput>, UsuarioUncheckedUpdateWithoutConsultorInput>
  }

  export type ProyectoUpdateManyWithoutConsultorNestedInput = {
    create?: XOR<ProyectoCreateWithoutConsultorInput, ProyectoUncheckedCreateWithoutConsultorInput> | ProyectoCreateWithoutConsultorInput[] | ProyectoUncheckedCreateWithoutConsultorInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutConsultorInput | ProyectoCreateOrConnectWithoutConsultorInput[]
    upsert?: ProyectoUpsertWithWhereUniqueWithoutConsultorInput | ProyectoUpsertWithWhereUniqueWithoutConsultorInput[]
    createMany?: ProyectoCreateManyConsultorInputEnvelope
    set?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    disconnect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    delete?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    update?: ProyectoUpdateWithWhereUniqueWithoutConsultorInput | ProyectoUpdateWithWhereUniqueWithoutConsultorInput[]
    updateMany?: ProyectoUpdateManyWithWhereWithoutConsultorInput | ProyectoUpdateManyWithWhereWithoutConsultorInput[]
    deleteMany?: ProyectoScalarWhereInput | ProyectoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProyectoUncheckedUpdateManyWithoutConsultorNestedInput = {
    create?: XOR<ProyectoCreateWithoutConsultorInput, ProyectoUncheckedCreateWithoutConsultorInput> | ProyectoCreateWithoutConsultorInput[] | ProyectoUncheckedCreateWithoutConsultorInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutConsultorInput | ProyectoCreateOrConnectWithoutConsultorInput[]
    upsert?: ProyectoUpsertWithWhereUniqueWithoutConsultorInput | ProyectoUpsertWithWhereUniqueWithoutConsultorInput[]
    createMany?: ProyectoCreateManyConsultorInputEnvelope
    set?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    disconnect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    delete?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    update?: ProyectoUpdateWithWhereUniqueWithoutConsultorInput | ProyectoUpdateWithWhereUniqueWithoutConsultorInput[]
    updateMany?: ProyectoUpdateManyWithWhereWithoutConsultorInput | ProyectoUpdateManyWithWhereWithoutConsultorInput[]
    deleteMany?: ProyectoScalarWhereInput | ProyectoScalarWhereInput[]
  }

  export type ProyectoCreateNestedManyWithoutEstado_proyectoInput = {
    create?: XOR<ProyectoCreateWithoutEstado_proyectoInput, ProyectoUncheckedCreateWithoutEstado_proyectoInput> | ProyectoCreateWithoutEstado_proyectoInput[] | ProyectoUncheckedCreateWithoutEstado_proyectoInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutEstado_proyectoInput | ProyectoCreateOrConnectWithoutEstado_proyectoInput[]
    createMany?: ProyectoCreateManyEstado_proyectoInputEnvelope
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
  }

  export type BitacoraCreateNestedManyWithoutEstado_proyectoInput = {
    create?: XOR<BitacoraCreateWithoutEstado_proyectoInput, BitacoraUncheckedCreateWithoutEstado_proyectoInput> | BitacoraCreateWithoutEstado_proyectoInput[] | BitacoraUncheckedCreateWithoutEstado_proyectoInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutEstado_proyectoInput | BitacoraCreateOrConnectWithoutEstado_proyectoInput[]
    createMany?: BitacoraCreateManyEstado_proyectoInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type ProyectoUncheckedCreateNestedManyWithoutEstado_proyectoInput = {
    create?: XOR<ProyectoCreateWithoutEstado_proyectoInput, ProyectoUncheckedCreateWithoutEstado_proyectoInput> | ProyectoCreateWithoutEstado_proyectoInput[] | ProyectoUncheckedCreateWithoutEstado_proyectoInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutEstado_proyectoInput | ProyectoCreateOrConnectWithoutEstado_proyectoInput[]
    createMany?: ProyectoCreateManyEstado_proyectoInputEnvelope
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
  }

  export type BitacoraUncheckedCreateNestedManyWithoutEstado_proyectoInput = {
    create?: XOR<BitacoraCreateWithoutEstado_proyectoInput, BitacoraUncheckedCreateWithoutEstado_proyectoInput> | BitacoraCreateWithoutEstado_proyectoInput[] | BitacoraUncheckedCreateWithoutEstado_proyectoInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutEstado_proyectoInput | BitacoraCreateOrConnectWithoutEstado_proyectoInput[]
    createMany?: BitacoraCreateManyEstado_proyectoInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type ProyectoUpdateManyWithoutEstado_proyectoNestedInput = {
    create?: XOR<ProyectoCreateWithoutEstado_proyectoInput, ProyectoUncheckedCreateWithoutEstado_proyectoInput> | ProyectoCreateWithoutEstado_proyectoInput[] | ProyectoUncheckedCreateWithoutEstado_proyectoInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutEstado_proyectoInput | ProyectoCreateOrConnectWithoutEstado_proyectoInput[]
    upsert?: ProyectoUpsertWithWhereUniqueWithoutEstado_proyectoInput | ProyectoUpsertWithWhereUniqueWithoutEstado_proyectoInput[]
    createMany?: ProyectoCreateManyEstado_proyectoInputEnvelope
    set?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    disconnect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    delete?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    update?: ProyectoUpdateWithWhereUniqueWithoutEstado_proyectoInput | ProyectoUpdateWithWhereUniqueWithoutEstado_proyectoInput[]
    updateMany?: ProyectoUpdateManyWithWhereWithoutEstado_proyectoInput | ProyectoUpdateManyWithWhereWithoutEstado_proyectoInput[]
    deleteMany?: ProyectoScalarWhereInput | ProyectoScalarWhereInput[]
  }

  export type BitacoraUpdateManyWithoutEstado_proyectoNestedInput = {
    create?: XOR<BitacoraCreateWithoutEstado_proyectoInput, BitacoraUncheckedCreateWithoutEstado_proyectoInput> | BitacoraCreateWithoutEstado_proyectoInput[] | BitacoraUncheckedCreateWithoutEstado_proyectoInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutEstado_proyectoInput | BitacoraCreateOrConnectWithoutEstado_proyectoInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutEstado_proyectoInput | BitacoraUpsertWithWhereUniqueWithoutEstado_proyectoInput[]
    createMany?: BitacoraCreateManyEstado_proyectoInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutEstado_proyectoInput | BitacoraUpdateWithWhereUniqueWithoutEstado_proyectoInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutEstado_proyectoInput | BitacoraUpdateManyWithWhereWithoutEstado_proyectoInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type ProyectoUncheckedUpdateManyWithoutEstado_proyectoNestedInput = {
    create?: XOR<ProyectoCreateWithoutEstado_proyectoInput, ProyectoUncheckedCreateWithoutEstado_proyectoInput> | ProyectoCreateWithoutEstado_proyectoInput[] | ProyectoUncheckedCreateWithoutEstado_proyectoInput[]
    connectOrCreate?: ProyectoCreateOrConnectWithoutEstado_proyectoInput | ProyectoCreateOrConnectWithoutEstado_proyectoInput[]
    upsert?: ProyectoUpsertWithWhereUniqueWithoutEstado_proyectoInput | ProyectoUpsertWithWhereUniqueWithoutEstado_proyectoInput[]
    createMany?: ProyectoCreateManyEstado_proyectoInputEnvelope
    set?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    disconnect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    delete?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    connect?: ProyectoWhereUniqueInput | ProyectoWhereUniqueInput[]
    update?: ProyectoUpdateWithWhereUniqueWithoutEstado_proyectoInput | ProyectoUpdateWithWhereUniqueWithoutEstado_proyectoInput[]
    updateMany?: ProyectoUpdateManyWithWhereWithoutEstado_proyectoInput | ProyectoUpdateManyWithWhereWithoutEstado_proyectoInput[]
    deleteMany?: ProyectoScalarWhereInput | ProyectoScalarWhereInput[]
  }

  export type BitacoraUncheckedUpdateManyWithoutEstado_proyectoNestedInput = {
    create?: XOR<BitacoraCreateWithoutEstado_proyectoInput, BitacoraUncheckedCreateWithoutEstado_proyectoInput> | BitacoraCreateWithoutEstado_proyectoInput[] | BitacoraUncheckedCreateWithoutEstado_proyectoInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutEstado_proyectoInput | BitacoraCreateOrConnectWithoutEstado_proyectoInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutEstado_proyectoInput | BitacoraUpsertWithWhereUniqueWithoutEstado_proyectoInput[]
    createMany?: BitacoraCreateManyEstado_proyectoInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutEstado_proyectoInput | BitacoraUpdateWithWhereUniqueWithoutEstado_proyectoInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutEstado_proyectoInput | BitacoraUpdateManyWithWhereWithoutEstado_proyectoInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutProyectosInput = {
    create?: XOR<ClienteCreateWithoutProyectosInput, ClienteUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutProyectosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ConsultorCreateNestedOneWithoutProyectosInput = {
    create?: XOR<ConsultorCreateWithoutProyectosInput, ConsultorUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: ConsultorCreateOrConnectWithoutProyectosInput
    connect?: ConsultorWhereUniqueInput
  }

  export type EstadoProyectoCreateNestedOneWithoutProyectosInput = {
    create?: XOR<EstadoProyectoCreateWithoutProyectosInput, EstadoProyectoUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: EstadoProyectoCreateOrConnectWithoutProyectosInput
    connect?: EstadoProyectoWhereUniqueInput
  }

  export type BitacoraCreateNestedManyWithoutProyectoInput = {
    create?: XOR<BitacoraCreateWithoutProyectoInput, BitacoraUncheckedCreateWithoutProyectoInput> | BitacoraCreateWithoutProyectoInput[] | BitacoraUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutProyectoInput | BitacoraCreateOrConnectWithoutProyectoInput[]
    createMany?: BitacoraCreateManyProyectoInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type LogMontoProyectoCreateNestedManyWithoutProyectoInput = {
    create?: XOR<LogMontoProyectoCreateWithoutProyectoInput, LogMontoProyectoUncheckedCreateWithoutProyectoInput> | LogMontoProyectoCreateWithoutProyectoInput[] | LogMontoProyectoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: LogMontoProyectoCreateOrConnectWithoutProyectoInput | LogMontoProyectoCreateOrConnectWithoutProyectoInput[]
    createMany?: LogMontoProyectoCreateManyProyectoInputEnvelope
    connect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
  }

  export type BitacoraUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<BitacoraCreateWithoutProyectoInput, BitacoraUncheckedCreateWithoutProyectoInput> | BitacoraCreateWithoutProyectoInput[] | BitacoraUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutProyectoInput | BitacoraCreateOrConnectWithoutProyectoInput[]
    createMany?: BitacoraCreateManyProyectoInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type LogMontoProyectoUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<LogMontoProyectoCreateWithoutProyectoInput, LogMontoProyectoUncheckedCreateWithoutProyectoInput> | LogMontoProyectoCreateWithoutProyectoInput[] | LogMontoProyectoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: LogMontoProyectoCreateOrConnectWithoutProyectoInput | LogMontoProyectoCreateOrConnectWithoutProyectoInput[]
    createMany?: LogMontoProyectoCreateManyProyectoInputEnvelope
    connect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClienteUpdateOneRequiredWithoutProyectosNestedInput = {
    create?: XOR<ClienteCreateWithoutProyectosInput, ClienteUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutProyectosInput
    upsert?: ClienteUpsertWithoutProyectosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutProyectosInput, ClienteUpdateWithoutProyectosInput>, ClienteUncheckedUpdateWithoutProyectosInput>
  }

  export type ConsultorUpdateOneRequiredWithoutProyectosNestedInput = {
    create?: XOR<ConsultorCreateWithoutProyectosInput, ConsultorUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: ConsultorCreateOrConnectWithoutProyectosInput
    upsert?: ConsultorUpsertWithoutProyectosInput
    connect?: ConsultorWhereUniqueInput
    update?: XOR<XOR<ConsultorUpdateToOneWithWhereWithoutProyectosInput, ConsultorUpdateWithoutProyectosInput>, ConsultorUncheckedUpdateWithoutProyectosInput>
  }

  export type EstadoProyectoUpdateOneRequiredWithoutProyectosNestedInput = {
    create?: XOR<EstadoProyectoCreateWithoutProyectosInput, EstadoProyectoUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: EstadoProyectoCreateOrConnectWithoutProyectosInput
    upsert?: EstadoProyectoUpsertWithoutProyectosInput
    connect?: EstadoProyectoWhereUniqueInput
    update?: XOR<XOR<EstadoProyectoUpdateToOneWithWhereWithoutProyectosInput, EstadoProyectoUpdateWithoutProyectosInput>, EstadoProyectoUncheckedUpdateWithoutProyectosInput>
  }

  export type BitacoraUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<BitacoraCreateWithoutProyectoInput, BitacoraUncheckedCreateWithoutProyectoInput> | BitacoraCreateWithoutProyectoInput[] | BitacoraUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutProyectoInput | BitacoraCreateOrConnectWithoutProyectoInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutProyectoInput | BitacoraUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: BitacoraCreateManyProyectoInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutProyectoInput | BitacoraUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutProyectoInput | BitacoraUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type LogMontoProyectoUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<LogMontoProyectoCreateWithoutProyectoInput, LogMontoProyectoUncheckedCreateWithoutProyectoInput> | LogMontoProyectoCreateWithoutProyectoInput[] | LogMontoProyectoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: LogMontoProyectoCreateOrConnectWithoutProyectoInput | LogMontoProyectoCreateOrConnectWithoutProyectoInput[]
    upsert?: LogMontoProyectoUpsertWithWhereUniqueWithoutProyectoInput | LogMontoProyectoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: LogMontoProyectoCreateManyProyectoInputEnvelope
    set?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    disconnect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    delete?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    connect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    update?: LogMontoProyectoUpdateWithWhereUniqueWithoutProyectoInput | LogMontoProyectoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: LogMontoProyectoUpdateManyWithWhereWithoutProyectoInput | LogMontoProyectoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: LogMontoProyectoScalarWhereInput | LogMontoProyectoScalarWhereInput[]
  }

  export type BitacoraUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<BitacoraCreateWithoutProyectoInput, BitacoraUncheckedCreateWithoutProyectoInput> | BitacoraCreateWithoutProyectoInput[] | BitacoraUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutProyectoInput | BitacoraCreateOrConnectWithoutProyectoInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutProyectoInput | BitacoraUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: BitacoraCreateManyProyectoInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutProyectoInput | BitacoraUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutProyectoInput | BitacoraUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type LogMontoProyectoUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<LogMontoProyectoCreateWithoutProyectoInput, LogMontoProyectoUncheckedCreateWithoutProyectoInput> | LogMontoProyectoCreateWithoutProyectoInput[] | LogMontoProyectoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: LogMontoProyectoCreateOrConnectWithoutProyectoInput | LogMontoProyectoCreateOrConnectWithoutProyectoInput[]
    upsert?: LogMontoProyectoUpsertWithWhereUniqueWithoutProyectoInput | LogMontoProyectoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: LogMontoProyectoCreateManyProyectoInputEnvelope
    set?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    disconnect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    delete?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    connect?: LogMontoProyectoWhereUniqueInput | LogMontoProyectoWhereUniqueInput[]
    update?: LogMontoProyectoUpdateWithWhereUniqueWithoutProyectoInput | LogMontoProyectoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: LogMontoProyectoUpdateManyWithWhereWithoutProyectoInput | LogMontoProyectoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: LogMontoProyectoScalarWhereInput | LogMontoProyectoScalarWhereInput[]
  }

  export type BitacoraCreateNestedManyWithoutPrioridadInput = {
    create?: XOR<BitacoraCreateWithoutPrioridadInput, BitacoraUncheckedCreateWithoutPrioridadInput> | BitacoraCreateWithoutPrioridadInput[] | BitacoraUncheckedCreateWithoutPrioridadInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutPrioridadInput | BitacoraCreateOrConnectWithoutPrioridadInput[]
    createMany?: BitacoraCreateManyPrioridadInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type BitacoraUncheckedCreateNestedManyWithoutPrioridadInput = {
    create?: XOR<BitacoraCreateWithoutPrioridadInput, BitacoraUncheckedCreateWithoutPrioridadInput> | BitacoraCreateWithoutPrioridadInput[] | BitacoraUncheckedCreateWithoutPrioridadInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutPrioridadInput | BitacoraCreateOrConnectWithoutPrioridadInput[]
    createMany?: BitacoraCreateManyPrioridadInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type BitacoraUpdateManyWithoutPrioridadNestedInput = {
    create?: XOR<BitacoraCreateWithoutPrioridadInput, BitacoraUncheckedCreateWithoutPrioridadInput> | BitacoraCreateWithoutPrioridadInput[] | BitacoraUncheckedCreateWithoutPrioridadInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutPrioridadInput | BitacoraCreateOrConnectWithoutPrioridadInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutPrioridadInput | BitacoraUpsertWithWhereUniqueWithoutPrioridadInput[]
    createMany?: BitacoraCreateManyPrioridadInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutPrioridadInput | BitacoraUpdateWithWhereUniqueWithoutPrioridadInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutPrioridadInput | BitacoraUpdateManyWithWhereWithoutPrioridadInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type BitacoraUncheckedUpdateManyWithoutPrioridadNestedInput = {
    create?: XOR<BitacoraCreateWithoutPrioridadInput, BitacoraUncheckedCreateWithoutPrioridadInput> | BitacoraCreateWithoutPrioridadInput[] | BitacoraUncheckedCreateWithoutPrioridadInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutPrioridadInput | BitacoraCreateOrConnectWithoutPrioridadInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutPrioridadInput | BitacoraUpsertWithWhereUniqueWithoutPrioridadInput[]
    createMany?: BitacoraCreateManyPrioridadInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutPrioridadInput | BitacoraUpdateWithWhereUniqueWithoutPrioridadInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutPrioridadInput | BitacoraUpdateManyWithWhereWithoutPrioridadInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type EstadoProyectoCreateNestedOneWithoutBitacorasInput = {
    create?: XOR<EstadoProyectoCreateWithoutBitacorasInput, EstadoProyectoUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: EstadoProyectoCreateOrConnectWithoutBitacorasInput
    connect?: EstadoProyectoWhereUniqueInput
  }

  export type ProyectoCreateNestedOneWithoutBitacorasInput = {
    create?: XOR<ProyectoCreateWithoutBitacorasInput, ProyectoUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: ProyectoCreateOrConnectWithoutBitacorasInput
    connect?: ProyectoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutBitacorasInput = {
    create?: XOR<UsuarioCreateWithoutBitacorasInput, UsuarioUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBitacorasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PrioridadCreateNestedOneWithoutBitacorasInput = {
    create?: XOR<PrioridadCreateWithoutBitacorasInput, PrioridadUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: PrioridadCreateOrConnectWithoutBitacorasInput
    connect?: PrioridadWhereUniqueInput
  }

  export type EstadoProyectoUpdateOneRequiredWithoutBitacorasNestedInput = {
    create?: XOR<EstadoProyectoCreateWithoutBitacorasInput, EstadoProyectoUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: EstadoProyectoCreateOrConnectWithoutBitacorasInput
    upsert?: EstadoProyectoUpsertWithoutBitacorasInput
    connect?: EstadoProyectoWhereUniqueInput
    update?: XOR<XOR<EstadoProyectoUpdateToOneWithWhereWithoutBitacorasInput, EstadoProyectoUpdateWithoutBitacorasInput>, EstadoProyectoUncheckedUpdateWithoutBitacorasInput>
  }

  export type ProyectoUpdateOneRequiredWithoutBitacorasNestedInput = {
    create?: XOR<ProyectoCreateWithoutBitacorasInput, ProyectoUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: ProyectoCreateOrConnectWithoutBitacorasInput
    upsert?: ProyectoUpsertWithoutBitacorasInput
    connect?: ProyectoWhereUniqueInput
    update?: XOR<XOR<ProyectoUpdateToOneWithWhereWithoutBitacorasInput, ProyectoUpdateWithoutBitacorasInput>, ProyectoUncheckedUpdateWithoutBitacorasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutBitacorasNestedInput = {
    create?: XOR<UsuarioCreateWithoutBitacorasInput, UsuarioUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBitacorasInput
    upsert?: UsuarioUpsertWithoutBitacorasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutBitacorasInput, UsuarioUpdateWithoutBitacorasInput>, UsuarioUncheckedUpdateWithoutBitacorasInput>
  }

  export type PrioridadUpdateOneRequiredWithoutBitacorasNestedInput = {
    create?: XOR<PrioridadCreateWithoutBitacorasInput, PrioridadUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: PrioridadCreateOrConnectWithoutBitacorasInput
    upsert?: PrioridadUpsertWithoutBitacorasInput
    connect?: PrioridadWhereUniqueInput
    update?: XOR<XOR<PrioridadUpdateToOneWithWhereWithoutBitacorasInput, PrioridadUpdateWithoutBitacorasInput>, PrioridadUncheckedUpdateWithoutBitacorasInput>
  }

  export type ProyectoCreateNestedOneWithoutLog_montosInput = {
    create?: XOR<ProyectoCreateWithoutLog_montosInput, ProyectoUncheckedCreateWithoutLog_montosInput>
    connectOrCreate?: ProyectoCreateOrConnectWithoutLog_montosInput
    connect?: ProyectoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutLog_montosInput = {
    create?: XOR<UsuarioCreateWithoutLog_montosInput, UsuarioUncheckedCreateWithoutLog_montosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLog_montosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProyectoUpdateOneRequiredWithoutLog_montosNestedInput = {
    create?: XOR<ProyectoCreateWithoutLog_montosInput, ProyectoUncheckedCreateWithoutLog_montosInput>
    connectOrCreate?: ProyectoCreateOrConnectWithoutLog_montosInput
    upsert?: ProyectoUpsertWithoutLog_montosInput
    connect?: ProyectoWhereUniqueInput
    update?: XOR<XOR<ProyectoUpdateToOneWithWhereWithoutLog_montosInput, ProyectoUpdateWithoutLog_montosInput>, ProyectoUncheckedUpdateWithoutLog_montosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutLog_montosNestedInput = {
    create?: XOR<UsuarioCreateWithoutLog_montosInput, UsuarioUncheckedCreateWithoutLog_montosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLog_montosInput
    upsert?: UsuarioUpsertWithoutLog_montosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLog_montosInput, UsuarioUpdateWithoutLog_montosInput>, UsuarioUncheckedUpdateWithoutLog_montosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutRolInput = {
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    consultor?: ConsultorCreateNestedOneWithoutUsuarioInput
    bitacoras?: BitacoraCreateNestedManyWithoutUsuarioInput
    log_montos?: LogMontoProyectoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    consultor?: ConsultorUncheckedCreateNestedOneWithoutUsuarioInput
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
    log_montos?: LogMontoProyectoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioCreateManyRolInputEnvelope = {
    data: UsuarioCreateManyRolInput | UsuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    id_rol?: IntFilter<"Usuario"> | number
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre: string
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id_rol?: number
    nombre: string
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type ConsultorCreateWithoutUsuarioInput = {
    nombre: string
    telefono?: string | null
    correo?: string | null
    activo?: boolean
    proyectos?: ProyectoCreateNestedManyWithoutConsultorInput
  }

  export type ConsultorUncheckedCreateWithoutUsuarioInput = {
    id_consultor?: number
    nombre: string
    telefono?: string | null
    correo?: string | null
    activo?: boolean
    proyectos?: ProyectoUncheckedCreateNestedManyWithoutConsultorInput
  }

  export type ConsultorCreateOrConnectWithoutUsuarioInput = {
    where: ConsultorWhereUniqueInput
    create: XOR<ConsultorCreateWithoutUsuarioInput, ConsultorUncheckedCreateWithoutUsuarioInput>
  }

  export type BitacoraCreateWithoutUsuarioInput = {
    fecha: Date | string
    observaciones?: string | null
    estado_proyecto: EstadoProyectoCreateNestedOneWithoutBitacorasInput
    proyecto: ProyectoCreateNestedOneWithoutBitacorasInput
    prioridad: PrioridadCreateNestedOneWithoutBitacorasInput
  }

  export type BitacoraUncheckedCreateWithoutUsuarioInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_estado_proyecto: number
    id_proyecto: number
    id_prioridad: number
  }

  export type BitacoraCreateOrConnectWithoutUsuarioInput = {
    where: BitacoraWhereUniqueInput
    create: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput>
  }

  export type BitacoraCreateManyUsuarioInputEnvelope = {
    data: BitacoraCreateManyUsuarioInput | BitacoraCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type LogMontoProyectoCreateWithoutUsuarioInput = {
    monto: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    fecha: Date | string
    proyecto: ProyectoCreateNestedOneWithoutLog_montosInput
  }

  export type LogMontoProyectoUncheckedCreateWithoutUsuarioInput = {
    id_log_montos?: number
    monto: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    fecha: Date | string
    id_proyecto: number
  }

  export type LogMontoProyectoCreateOrConnectWithoutUsuarioInput = {
    where: LogMontoProyectoWhereUniqueInput
    create: XOR<LogMontoProyectoCreateWithoutUsuarioInput, LogMontoProyectoUncheckedCreateWithoutUsuarioInput>
  }

  export type LogMontoProyectoCreateManyUsuarioInputEnvelope = {
    data: LogMontoProyectoCreateManyUsuarioInput | LogMontoProyectoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultorUpsertWithoutUsuarioInput = {
    update: XOR<ConsultorUpdateWithoutUsuarioInput, ConsultorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ConsultorCreateWithoutUsuarioInput, ConsultorUncheckedCreateWithoutUsuarioInput>
    where?: ConsultorWhereInput
  }

  export type ConsultorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ConsultorWhereInput
    data: XOR<ConsultorUpdateWithoutUsuarioInput, ConsultorUncheckedUpdateWithoutUsuarioInput>
  }

  export type ConsultorUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    proyectos?: ProyectoUpdateManyWithoutConsultorNestedInput
  }

  export type ConsultorUncheckedUpdateWithoutUsuarioInput = {
    id_consultor?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    proyectos?: ProyectoUncheckedUpdateManyWithoutConsultorNestedInput
  }

  export type BitacoraUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: BitacoraWhereUniqueInput
    update: XOR<BitacoraUpdateWithoutUsuarioInput, BitacoraUncheckedUpdateWithoutUsuarioInput>
    create: XOR<BitacoraCreateWithoutUsuarioInput, BitacoraUncheckedCreateWithoutUsuarioInput>
  }

  export type BitacoraUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: BitacoraWhereUniqueInput
    data: XOR<BitacoraUpdateWithoutUsuarioInput, BitacoraUncheckedUpdateWithoutUsuarioInput>
  }

  export type BitacoraUpdateManyWithWhereWithoutUsuarioInput = {
    where: BitacoraScalarWhereInput
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type BitacoraScalarWhereInput = {
    AND?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
    OR?: BitacoraScalarWhereInput[]
    NOT?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
    id_bitacora?: IntFilter<"Bitacora"> | number
    fecha?: DateTimeFilter<"Bitacora"> | Date | string
    observaciones?: StringNullableFilter<"Bitacora"> | string | null
    id_estado_proyecto?: IntFilter<"Bitacora"> | number
    id_proyecto?: IntFilter<"Bitacora"> | number
    id_usuario?: IntFilter<"Bitacora"> | number
    id_prioridad?: IntFilter<"Bitacora"> | number
  }

  export type LogMontoProyectoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LogMontoProyectoWhereUniqueInput
    update: XOR<LogMontoProyectoUpdateWithoutUsuarioInput, LogMontoProyectoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LogMontoProyectoCreateWithoutUsuarioInput, LogMontoProyectoUncheckedCreateWithoutUsuarioInput>
  }

  export type LogMontoProyectoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LogMontoProyectoWhereUniqueInput
    data: XOR<LogMontoProyectoUpdateWithoutUsuarioInput, LogMontoProyectoUncheckedUpdateWithoutUsuarioInput>
  }

  export type LogMontoProyectoUpdateManyWithWhereWithoutUsuarioInput = {
    where: LogMontoProyectoScalarWhereInput
    data: XOR<LogMontoProyectoUpdateManyMutationInput, LogMontoProyectoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LogMontoProyectoScalarWhereInput = {
    AND?: LogMontoProyectoScalarWhereInput | LogMontoProyectoScalarWhereInput[]
    OR?: LogMontoProyectoScalarWhereInput[]
    NOT?: LogMontoProyectoScalarWhereInput | LogMontoProyectoScalarWhereInput[]
    id_log_montos?: IntFilter<"LogMontoProyecto"> | number
    monto?: DecimalFilter<"LogMontoProyecto"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"LogMontoProyecto"> | string | null
    fecha?: DateTimeFilter<"LogMontoProyecto"> | Date | string
    id_proyecto?: IntFilter<"LogMontoProyecto"> | number
    id_usuario?: IntFilter<"LogMontoProyecto"> | number
  }

  export type ClienteCreateWithoutEmpresaInput = {
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    estado_cliente: EstadoClienteCreateNestedOneWithoutClientesInput
    proyectos?: ProyectoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutEmpresaInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    id_estado_cliente: number
    proyectos?: ProyectoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutEmpresaInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput>
  }

  export type ClienteCreateManyEmpresaInputEnvelope = {
    data: ClienteCreateManyEmpresaInput | ClienteCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutEmpresaInput, ClienteUncheckedUpdateWithoutEmpresaInput>
    create: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutEmpresaInput, ClienteUncheckedUpdateWithoutEmpresaInput>
  }

  export type ClienteUpdateManyWithWhereWithoutEmpresaInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id_cliente?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    apellido?: StringFilter<"Cliente"> | string
    correo?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    id_empresa?: IntFilter<"Cliente"> | number
    id_estado_cliente?: IntFilter<"Cliente"> | number
  }

  export type ClienteCreateWithoutEstado_clienteInput = {
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    empresa: EmpresaCreateNestedOneWithoutClientesInput
    proyectos?: ProyectoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutEstado_clienteInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    id_empresa: number
    proyectos?: ProyectoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutEstado_clienteInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEstado_clienteInput, ClienteUncheckedCreateWithoutEstado_clienteInput>
  }

  export type ClienteCreateManyEstado_clienteInputEnvelope = {
    data: ClienteCreateManyEstado_clienteInput | ClienteCreateManyEstado_clienteInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutEstado_clienteInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutEstado_clienteInput, ClienteUncheckedUpdateWithoutEstado_clienteInput>
    create: XOR<ClienteCreateWithoutEstado_clienteInput, ClienteUncheckedCreateWithoutEstado_clienteInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutEstado_clienteInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutEstado_clienteInput, ClienteUncheckedUpdateWithoutEstado_clienteInput>
  }

  export type ClienteUpdateManyWithWhereWithoutEstado_clienteInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutEstado_clienteInput>
  }

  export type EmpresaCreateWithoutClientesInput = {
    nombre: string
    direccion?: string | null
  }

  export type EmpresaUncheckedCreateWithoutClientesInput = {
    id_empresa?: number
    nombre: string
    direccion?: string | null
  }

  export type EmpresaCreateOrConnectWithoutClientesInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutClientesInput, EmpresaUncheckedCreateWithoutClientesInput>
  }

  export type EstadoClienteCreateWithoutClientesInput = {
    estado: string
  }

  export type EstadoClienteUncheckedCreateWithoutClientesInput = {
    id_estado_cliente?: number
    estado: string
  }

  export type EstadoClienteCreateOrConnectWithoutClientesInput = {
    where: EstadoClienteWhereUniqueInput
    create: XOR<EstadoClienteCreateWithoutClientesInput, EstadoClienteUncheckedCreateWithoutClientesInput>
  }

  export type ProyectoCreateWithoutClienteInput = {
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    consultor: ConsultorCreateNestedOneWithoutProyectosInput
    estado_proyecto: EstadoProyectoCreateNestedOneWithoutProyectosInput
    bitacoras?: BitacoraCreateNestedManyWithoutProyectoInput
    log_montos?: LogMontoProyectoCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUncheckedCreateWithoutClienteInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_consultor: number
    id_estado_proyecto: number
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutProyectoInput
    log_montos?: LogMontoProyectoUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoCreateOrConnectWithoutClienteInput = {
    where: ProyectoWhereUniqueInput
    create: XOR<ProyectoCreateWithoutClienteInput, ProyectoUncheckedCreateWithoutClienteInput>
  }

  export type ProyectoCreateManyClienteInputEnvelope = {
    data: ProyectoCreateManyClienteInput | ProyectoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutClientesInput = {
    update: XOR<EmpresaUpdateWithoutClientesInput, EmpresaUncheckedUpdateWithoutClientesInput>
    create: XOR<EmpresaCreateWithoutClientesInput, EmpresaUncheckedCreateWithoutClientesInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutClientesInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutClientesInput, EmpresaUncheckedUpdateWithoutClientesInput>
  }

  export type EmpresaUpdateWithoutClientesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpresaUncheckedUpdateWithoutClientesInput = {
    id_empresa?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstadoClienteUpsertWithoutClientesInput = {
    update: XOR<EstadoClienteUpdateWithoutClientesInput, EstadoClienteUncheckedUpdateWithoutClientesInput>
    create: XOR<EstadoClienteCreateWithoutClientesInput, EstadoClienteUncheckedCreateWithoutClientesInput>
    where?: EstadoClienteWhereInput
  }

  export type EstadoClienteUpdateToOneWithWhereWithoutClientesInput = {
    where?: EstadoClienteWhereInput
    data: XOR<EstadoClienteUpdateWithoutClientesInput, EstadoClienteUncheckedUpdateWithoutClientesInput>
  }

  export type EstadoClienteUpdateWithoutClientesInput = {
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoClienteUncheckedUpdateWithoutClientesInput = {
    id_estado_cliente?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ProyectoUpsertWithWhereUniqueWithoutClienteInput = {
    where: ProyectoWhereUniqueInput
    update: XOR<ProyectoUpdateWithoutClienteInput, ProyectoUncheckedUpdateWithoutClienteInput>
    create: XOR<ProyectoCreateWithoutClienteInput, ProyectoUncheckedCreateWithoutClienteInput>
  }

  export type ProyectoUpdateWithWhereUniqueWithoutClienteInput = {
    where: ProyectoWhereUniqueInput
    data: XOR<ProyectoUpdateWithoutClienteInput, ProyectoUncheckedUpdateWithoutClienteInput>
  }

  export type ProyectoUpdateManyWithWhereWithoutClienteInput = {
    where: ProyectoScalarWhereInput
    data: XOR<ProyectoUpdateManyMutationInput, ProyectoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ProyectoScalarWhereInput = {
    AND?: ProyectoScalarWhereInput | ProyectoScalarWhereInput[]
    OR?: ProyectoScalarWhereInput[]
    NOT?: ProyectoScalarWhereInput | ProyectoScalarWhereInput[]
    id_proyecto?: IntFilter<"Proyecto"> | number
    no_proyecto?: StringFilter<"Proyecto"> | string
    nombre?: StringNullableFilter<"Proyecto"> | string | null
    descripcion?: StringNullableFilter<"Proyecto"> | string | null
    fecha_inicio?: DateTimeFilter<"Proyecto"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"Proyecto"> | Date | string | null
    id_cliente?: IntFilter<"Proyecto"> | number
    id_consultor?: IntFilter<"Proyecto"> | number
    id_estado_proyecto?: IntFilter<"Proyecto"> | number
  }

  export type UsuarioCreateWithoutConsultorInput = {
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    rol: RolCreateNestedOneWithoutUsuariosInput
    bitacoras?: BitacoraCreateNestedManyWithoutUsuarioInput
    log_montos?: LogMontoProyectoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutConsultorInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    id_rol: number
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
    log_montos?: LogMontoProyectoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutConsultorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutConsultorInput, UsuarioUncheckedCreateWithoutConsultorInput>
  }

  export type ProyectoCreateWithoutConsultorInput = {
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutProyectosInput
    estado_proyecto: EstadoProyectoCreateNestedOneWithoutProyectosInput
    bitacoras?: BitacoraCreateNestedManyWithoutProyectoInput
    log_montos?: LogMontoProyectoCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUncheckedCreateWithoutConsultorInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_cliente: number
    id_estado_proyecto: number
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutProyectoInput
    log_montos?: LogMontoProyectoUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoCreateOrConnectWithoutConsultorInput = {
    where: ProyectoWhereUniqueInput
    create: XOR<ProyectoCreateWithoutConsultorInput, ProyectoUncheckedCreateWithoutConsultorInput>
  }

  export type ProyectoCreateManyConsultorInputEnvelope = {
    data: ProyectoCreateManyConsultorInput | ProyectoCreateManyConsultorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutConsultorInput = {
    update: XOR<UsuarioUpdateWithoutConsultorInput, UsuarioUncheckedUpdateWithoutConsultorInput>
    create: XOR<UsuarioCreateWithoutConsultorInput, UsuarioUncheckedCreateWithoutConsultorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutConsultorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutConsultorInput, UsuarioUncheckedUpdateWithoutConsultorInput>
  }

  export type UsuarioUpdateWithoutConsultorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    bitacoras?: BitacoraUpdateManyWithoutUsuarioNestedInput
    log_montos?: LogMontoProyectoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutConsultorInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_rol?: IntFieldUpdateOperationsInput | number
    bitacoras?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
    log_montos?: LogMontoProyectoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProyectoUpsertWithWhereUniqueWithoutConsultorInput = {
    where: ProyectoWhereUniqueInput
    update: XOR<ProyectoUpdateWithoutConsultorInput, ProyectoUncheckedUpdateWithoutConsultorInput>
    create: XOR<ProyectoCreateWithoutConsultorInput, ProyectoUncheckedCreateWithoutConsultorInput>
  }

  export type ProyectoUpdateWithWhereUniqueWithoutConsultorInput = {
    where: ProyectoWhereUniqueInput
    data: XOR<ProyectoUpdateWithoutConsultorInput, ProyectoUncheckedUpdateWithoutConsultorInput>
  }

  export type ProyectoUpdateManyWithWhereWithoutConsultorInput = {
    where: ProyectoScalarWhereInput
    data: XOR<ProyectoUpdateManyMutationInput, ProyectoUncheckedUpdateManyWithoutConsultorInput>
  }

  export type ProyectoCreateWithoutEstado_proyectoInput = {
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutProyectosInput
    consultor: ConsultorCreateNestedOneWithoutProyectosInput
    bitacoras?: BitacoraCreateNestedManyWithoutProyectoInput
    log_montos?: LogMontoProyectoCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUncheckedCreateWithoutEstado_proyectoInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_cliente: number
    id_consultor: number
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutProyectoInput
    log_montos?: LogMontoProyectoUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoCreateOrConnectWithoutEstado_proyectoInput = {
    where: ProyectoWhereUniqueInput
    create: XOR<ProyectoCreateWithoutEstado_proyectoInput, ProyectoUncheckedCreateWithoutEstado_proyectoInput>
  }

  export type ProyectoCreateManyEstado_proyectoInputEnvelope = {
    data: ProyectoCreateManyEstado_proyectoInput | ProyectoCreateManyEstado_proyectoInput[]
    skipDuplicates?: boolean
  }

  export type BitacoraCreateWithoutEstado_proyectoInput = {
    fecha: Date | string
    observaciones?: string | null
    proyecto: ProyectoCreateNestedOneWithoutBitacorasInput
    usuario: UsuarioCreateNestedOneWithoutBitacorasInput
    prioridad: PrioridadCreateNestedOneWithoutBitacorasInput
  }

  export type BitacoraUncheckedCreateWithoutEstado_proyectoInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_proyecto: number
    id_usuario: number
    id_prioridad: number
  }

  export type BitacoraCreateOrConnectWithoutEstado_proyectoInput = {
    where: BitacoraWhereUniqueInput
    create: XOR<BitacoraCreateWithoutEstado_proyectoInput, BitacoraUncheckedCreateWithoutEstado_proyectoInput>
  }

  export type BitacoraCreateManyEstado_proyectoInputEnvelope = {
    data: BitacoraCreateManyEstado_proyectoInput | BitacoraCreateManyEstado_proyectoInput[]
    skipDuplicates?: boolean
  }

  export type ProyectoUpsertWithWhereUniqueWithoutEstado_proyectoInput = {
    where: ProyectoWhereUniqueInput
    update: XOR<ProyectoUpdateWithoutEstado_proyectoInput, ProyectoUncheckedUpdateWithoutEstado_proyectoInput>
    create: XOR<ProyectoCreateWithoutEstado_proyectoInput, ProyectoUncheckedCreateWithoutEstado_proyectoInput>
  }

  export type ProyectoUpdateWithWhereUniqueWithoutEstado_proyectoInput = {
    where: ProyectoWhereUniqueInput
    data: XOR<ProyectoUpdateWithoutEstado_proyectoInput, ProyectoUncheckedUpdateWithoutEstado_proyectoInput>
  }

  export type ProyectoUpdateManyWithWhereWithoutEstado_proyectoInput = {
    where: ProyectoScalarWhereInput
    data: XOR<ProyectoUpdateManyMutationInput, ProyectoUncheckedUpdateManyWithoutEstado_proyectoInput>
  }

  export type BitacoraUpsertWithWhereUniqueWithoutEstado_proyectoInput = {
    where: BitacoraWhereUniqueInput
    update: XOR<BitacoraUpdateWithoutEstado_proyectoInput, BitacoraUncheckedUpdateWithoutEstado_proyectoInput>
    create: XOR<BitacoraCreateWithoutEstado_proyectoInput, BitacoraUncheckedCreateWithoutEstado_proyectoInput>
  }

  export type BitacoraUpdateWithWhereUniqueWithoutEstado_proyectoInput = {
    where: BitacoraWhereUniqueInput
    data: XOR<BitacoraUpdateWithoutEstado_proyectoInput, BitacoraUncheckedUpdateWithoutEstado_proyectoInput>
  }

  export type BitacoraUpdateManyWithWhereWithoutEstado_proyectoInput = {
    where: BitacoraScalarWhereInput
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyWithoutEstado_proyectoInput>
  }

  export type ClienteCreateWithoutProyectosInput = {
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    empresa: EmpresaCreateNestedOneWithoutClientesInput
    estado_cliente: EstadoClienteCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutProyectosInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    id_empresa: number
    id_estado_cliente: number
  }

  export type ClienteCreateOrConnectWithoutProyectosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutProyectosInput, ClienteUncheckedCreateWithoutProyectosInput>
  }

  export type ConsultorCreateWithoutProyectosInput = {
    nombre: string
    telefono?: string | null
    correo?: string | null
    activo?: boolean
    usuario?: UsuarioCreateNestedOneWithoutConsultorInput
  }

  export type ConsultorUncheckedCreateWithoutProyectosInput = {
    id_consultor?: number
    nombre: string
    telefono?: string | null
    correo?: string | null
    activo?: boolean
    id_usuario?: number | null
  }

  export type ConsultorCreateOrConnectWithoutProyectosInput = {
    where: ConsultorWhereUniqueInput
    create: XOR<ConsultorCreateWithoutProyectosInput, ConsultorUncheckedCreateWithoutProyectosInput>
  }

  export type EstadoProyectoCreateWithoutProyectosInput = {
    estado: string
    bitacoras?: BitacoraCreateNestedManyWithoutEstado_proyectoInput
  }

  export type EstadoProyectoUncheckedCreateWithoutProyectosInput = {
    id_estado_proyecto?: number
    estado: string
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutEstado_proyectoInput
  }

  export type EstadoProyectoCreateOrConnectWithoutProyectosInput = {
    where: EstadoProyectoWhereUniqueInput
    create: XOR<EstadoProyectoCreateWithoutProyectosInput, EstadoProyectoUncheckedCreateWithoutProyectosInput>
  }

  export type BitacoraCreateWithoutProyectoInput = {
    fecha: Date | string
    observaciones?: string | null
    estado_proyecto: EstadoProyectoCreateNestedOneWithoutBitacorasInput
    usuario: UsuarioCreateNestedOneWithoutBitacorasInput
    prioridad: PrioridadCreateNestedOneWithoutBitacorasInput
  }

  export type BitacoraUncheckedCreateWithoutProyectoInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_estado_proyecto: number
    id_usuario: number
    id_prioridad: number
  }

  export type BitacoraCreateOrConnectWithoutProyectoInput = {
    where: BitacoraWhereUniqueInput
    create: XOR<BitacoraCreateWithoutProyectoInput, BitacoraUncheckedCreateWithoutProyectoInput>
  }

  export type BitacoraCreateManyProyectoInputEnvelope = {
    data: BitacoraCreateManyProyectoInput | BitacoraCreateManyProyectoInput[]
    skipDuplicates?: boolean
  }

  export type LogMontoProyectoCreateWithoutProyectoInput = {
    monto: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    fecha: Date | string
    usuario: UsuarioCreateNestedOneWithoutLog_montosInput
  }

  export type LogMontoProyectoUncheckedCreateWithoutProyectoInput = {
    id_log_montos?: number
    monto: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    fecha: Date | string
    id_usuario: number
  }

  export type LogMontoProyectoCreateOrConnectWithoutProyectoInput = {
    where: LogMontoProyectoWhereUniqueInput
    create: XOR<LogMontoProyectoCreateWithoutProyectoInput, LogMontoProyectoUncheckedCreateWithoutProyectoInput>
  }

  export type LogMontoProyectoCreateManyProyectoInputEnvelope = {
    data: LogMontoProyectoCreateManyProyectoInput | LogMontoProyectoCreateManyProyectoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutProyectosInput = {
    update: XOR<ClienteUpdateWithoutProyectosInput, ClienteUncheckedUpdateWithoutProyectosInput>
    create: XOR<ClienteCreateWithoutProyectosInput, ClienteUncheckedCreateWithoutProyectosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutProyectosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutProyectosInput, ClienteUncheckedUpdateWithoutProyectosInput>
  }

  export type ClienteUpdateWithoutProyectosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutClientesNestedInput
    estado_cliente?: EstadoClienteUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutProyectosInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: IntFieldUpdateOperationsInput | number
    id_estado_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultorUpsertWithoutProyectosInput = {
    update: XOR<ConsultorUpdateWithoutProyectosInput, ConsultorUncheckedUpdateWithoutProyectosInput>
    create: XOR<ConsultorCreateWithoutProyectosInput, ConsultorUncheckedCreateWithoutProyectosInput>
    where?: ConsultorWhereInput
  }

  export type ConsultorUpdateToOneWithWhereWithoutProyectosInput = {
    where?: ConsultorWhereInput
    data: XOR<ConsultorUpdateWithoutProyectosInput, ConsultorUncheckedUpdateWithoutProyectosInput>
  }

  export type ConsultorUpdateWithoutProyectosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneWithoutConsultorNestedInput
  }

  export type ConsultorUncheckedUpdateWithoutProyectosInput = {
    id_consultor?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EstadoProyectoUpsertWithoutProyectosInput = {
    update: XOR<EstadoProyectoUpdateWithoutProyectosInput, EstadoProyectoUncheckedUpdateWithoutProyectosInput>
    create: XOR<EstadoProyectoCreateWithoutProyectosInput, EstadoProyectoUncheckedCreateWithoutProyectosInput>
    where?: EstadoProyectoWhereInput
  }

  export type EstadoProyectoUpdateToOneWithWhereWithoutProyectosInput = {
    where?: EstadoProyectoWhereInput
    data: XOR<EstadoProyectoUpdateWithoutProyectosInput, EstadoProyectoUncheckedUpdateWithoutProyectosInput>
  }

  export type EstadoProyectoUpdateWithoutProyectosInput = {
    estado?: StringFieldUpdateOperationsInput | string
    bitacoras?: BitacoraUpdateManyWithoutEstado_proyectoNestedInput
  }

  export type EstadoProyectoUncheckedUpdateWithoutProyectosInput = {
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    bitacoras?: BitacoraUncheckedUpdateManyWithoutEstado_proyectoNestedInput
  }

  export type BitacoraUpsertWithWhereUniqueWithoutProyectoInput = {
    where: BitacoraWhereUniqueInput
    update: XOR<BitacoraUpdateWithoutProyectoInput, BitacoraUncheckedUpdateWithoutProyectoInput>
    create: XOR<BitacoraCreateWithoutProyectoInput, BitacoraUncheckedCreateWithoutProyectoInput>
  }

  export type BitacoraUpdateWithWhereUniqueWithoutProyectoInput = {
    where: BitacoraWhereUniqueInput
    data: XOR<BitacoraUpdateWithoutProyectoInput, BitacoraUncheckedUpdateWithoutProyectoInput>
  }

  export type BitacoraUpdateManyWithWhereWithoutProyectoInput = {
    where: BitacoraScalarWhereInput
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyWithoutProyectoInput>
  }

  export type LogMontoProyectoUpsertWithWhereUniqueWithoutProyectoInput = {
    where: LogMontoProyectoWhereUniqueInput
    update: XOR<LogMontoProyectoUpdateWithoutProyectoInput, LogMontoProyectoUncheckedUpdateWithoutProyectoInput>
    create: XOR<LogMontoProyectoCreateWithoutProyectoInput, LogMontoProyectoUncheckedCreateWithoutProyectoInput>
  }

  export type LogMontoProyectoUpdateWithWhereUniqueWithoutProyectoInput = {
    where: LogMontoProyectoWhereUniqueInput
    data: XOR<LogMontoProyectoUpdateWithoutProyectoInput, LogMontoProyectoUncheckedUpdateWithoutProyectoInput>
  }

  export type LogMontoProyectoUpdateManyWithWhereWithoutProyectoInput = {
    where: LogMontoProyectoScalarWhereInput
    data: XOR<LogMontoProyectoUpdateManyMutationInput, LogMontoProyectoUncheckedUpdateManyWithoutProyectoInput>
  }

  export type BitacoraCreateWithoutPrioridadInput = {
    fecha: Date | string
    observaciones?: string | null
    estado_proyecto: EstadoProyectoCreateNestedOneWithoutBitacorasInput
    proyecto: ProyectoCreateNestedOneWithoutBitacorasInput
    usuario: UsuarioCreateNestedOneWithoutBitacorasInput
  }

  export type BitacoraUncheckedCreateWithoutPrioridadInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_estado_proyecto: number
    id_proyecto: number
    id_usuario: number
  }

  export type BitacoraCreateOrConnectWithoutPrioridadInput = {
    where: BitacoraWhereUniqueInput
    create: XOR<BitacoraCreateWithoutPrioridadInput, BitacoraUncheckedCreateWithoutPrioridadInput>
  }

  export type BitacoraCreateManyPrioridadInputEnvelope = {
    data: BitacoraCreateManyPrioridadInput | BitacoraCreateManyPrioridadInput[]
    skipDuplicates?: boolean
  }

  export type BitacoraUpsertWithWhereUniqueWithoutPrioridadInput = {
    where: BitacoraWhereUniqueInput
    update: XOR<BitacoraUpdateWithoutPrioridadInput, BitacoraUncheckedUpdateWithoutPrioridadInput>
    create: XOR<BitacoraCreateWithoutPrioridadInput, BitacoraUncheckedCreateWithoutPrioridadInput>
  }

  export type BitacoraUpdateWithWhereUniqueWithoutPrioridadInput = {
    where: BitacoraWhereUniqueInput
    data: XOR<BitacoraUpdateWithoutPrioridadInput, BitacoraUncheckedUpdateWithoutPrioridadInput>
  }

  export type BitacoraUpdateManyWithWhereWithoutPrioridadInput = {
    where: BitacoraScalarWhereInput
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyWithoutPrioridadInput>
  }

  export type EstadoProyectoCreateWithoutBitacorasInput = {
    estado: string
    proyectos?: ProyectoCreateNestedManyWithoutEstado_proyectoInput
  }

  export type EstadoProyectoUncheckedCreateWithoutBitacorasInput = {
    id_estado_proyecto?: number
    estado: string
    proyectos?: ProyectoUncheckedCreateNestedManyWithoutEstado_proyectoInput
  }

  export type EstadoProyectoCreateOrConnectWithoutBitacorasInput = {
    where: EstadoProyectoWhereUniqueInput
    create: XOR<EstadoProyectoCreateWithoutBitacorasInput, EstadoProyectoUncheckedCreateWithoutBitacorasInput>
  }

  export type ProyectoCreateWithoutBitacorasInput = {
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutProyectosInput
    consultor: ConsultorCreateNestedOneWithoutProyectosInput
    estado_proyecto: EstadoProyectoCreateNestedOneWithoutProyectosInput
    log_montos?: LogMontoProyectoCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUncheckedCreateWithoutBitacorasInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_cliente: number
    id_consultor: number
    id_estado_proyecto: number
    log_montos?: LogMontoProyectoUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoCreateOrConnectWithoutBitacorasInput = {
    where: ProyectoWhereUniqueInput
    create: XOR<ProyectoCreateWithoutBitacorasInput, ProyectoUncheckedCreateWithoutBitacorasInput>
  }

  export type UsuarioCreateWithoutBitacorasInput = {
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    rol: RolCreateNestedOneWithoutUsuariosInput
    consultor?: ConsultorCreateNestedOneWithoutUsuarioInput
    log_montos?: LogMontoProyectoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutBitacorasInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    id_rol: number
    consultor?: ConsultorUncheckedCreateNestedOneWithoutUsuarioInput
    log_montos?: LogMontoProyectoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutBitacorasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutBitacorasInput, UsuarioUncheckedCreateWithoutBitacorasInput>
  }

  export type PrioridadCreateWithoutBitacorasInput = {
    nombre_prioridad: string
  }

  export type PrioridadUncheckedCreateWithoutBitacorasInput = {
    id_prioridad?: number
    nombre_prioridad: string
  }

  export type PrioridadCreateOrConnectWithoutBitacorasInput = {
    where: PrioridadWhereUniqueInput
    create: XOR<PrioridadCreateWithoutBitacorasInput, PrioridadUncheckedCreateWithoutBitacorasInput>
  }

  export type EstadoProyectoUpsertWithoutBitacorasInput = {
    update: XOR<EstadoProyectoUpdateWithoutBitacorasInput, EstadoProyectoUncheckedUpdateWithoutBitacorasInput>
    create: XOR<EstadoProyectoCreateWithoutBitacorasInput, EstadoProyectoUncheckedCreateWithoutBitacorasInput>
    where?: EstadoProyectoWhereInput
  }

  export type EstadoProyectoUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: EstadoProyectoWhereInput
    data: XOR<EstadoProyectoUpdateWithoutBitacorasInput, EstadoProyectoUncheckedUpdateWithoutBitacorasInput>
  }

  export type EstadoProyectoUpdateWithoutBitacorasInput = {
    estado?: StringFieldUpdateOperationsInput | string
    proyectos?: ProyectoUpdateManyWithoutEstado_proyectoNestedInput
  }

  export type EstadoProyectoUncheckedUpdateWithoutBitacorasInput = {
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    proyectos?: ProyectoUncheckedUpdateManyWithoutEstado_proyectoNestedInput
  }

  export type ProyectoUpsertWithoutBitacorasInput = {
    update: XOR<ProyectoUpdateWithoutBitacorasInput, ProyectoUncheckedUpdateWithoutBitacorasInput>
    create: XOR<ProyectoCreateWithoutBitacorasInput, ProyectoUncheckedCreateWithoutBitacorasInput>
    where?: ProyectoWhereInput
  }

  export type ProyectoUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: ProyectoWhereInput
    data: XOR<ProyectoUpdateWithoutBitacorasInput, ProyectoUncheckedUpdateWithoutBitacorasInput>
  }

  export type ProyectoUpdateWithoutBitacorasInput = {
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutProyectosNestedInput
    consultor?: ConsultorUpdateOneRequiredWithoutProyectosNestedInput
    estado_proyecto?: EstadoProyectoUpdateOneRequiredWithoutProyectosNestedInput
    log_montos?: LogMontoProyectoUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateWithoutBitacorasInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_consultor?: IntFieldUpdateOperationsInput | number
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    log_montos?: LogMontoProyectoUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type UsuarioUpsertWithoutBitacorasInput = {
    update: XOR<UsuarioUpdateWithoutBitacorasInput, UsuarioUncheckedUpdateWithoutBitacorasInput>
    create: XOR<UsuarioCreateWithoutBitacorasInput, UsuarioUncheckedCreateWithoutBitacorasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutBitacorasInput, UsuarioUncheckedUpdateWithoutBitacorasInput>
  }

  export type UsuarioUpdateWithoutBitacorasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    consultor?: ConsultorUpdateOneWithoutUsuarioNestedInput
    log_montos?: LogMontoProyectoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutBitacorasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_rol?: IntFieldUpdateOperationsInput | number
    consultor?: ConsultorUncheckedUpdateOneWithoutUsuarioNestedInput
    log_montos?: LogMontoProyectoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PrioridadUpsertWithoutBitacorasInput = {
    update: XOR<PrioridadUpdateWithoutBitacorasInput, PrioridadUncheckedUpdateWithoutBitacorasInput>
    create: XOR<PrioridadCreateWithoutBitacorasInput, PrioridadUncheckedCreateWithoutBitacorasInput>
    where?: PrioridadWhereInput
  }

  export type PrioridadUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: PrioridadWhereInput
    data: XOR<PrioridadUpdateWithoutBitacorasInput, PrioridadUncheckedUpdateWithoutBitacorasInput>
  }

  export type PrioridadUpdateWithoutBitacorasInput = {
    nombre_prioridad?: StringFieldUpdateOperationsInput | string
  }

  export type PrioridadUncheckedUpdateWithoutBitacorasInput = {
    id_prioridad?: IntFieldUpdateOperationsInput | number
    nombre_prioridad?: StringFieldUpdateOperationsInput | string
  }

  export type ProyectoCreateWithoutLog_montosInput = {
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutProyectosInput
    consultor: ConsultorCreateNestedOneWithoutProyectosInput
    estado_proyecto: EstadoProyectoCreateNestedOneWithoutProyectosInput
    bitacoras?: BitacoraCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUncheckedCreateWithoutLog_montosInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_cliente: number
    id_consultor: number
    id_estado_proyecto: number
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoCreateOrConnectWithoutLog_montosInput = {
    where: ProyectoWhereUniqueInput
    create: XOR<ProyectoCreateWithoutLog_montosInput, ProyectoUncheckedCreateWithoutLog_montosInput>
  }

  export type UsuarioCreateWithoutLog_montosInput = {
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    rol: RolCreateNestedOneWithoutUsuariosInput
    consultor?: ConsultorCreateNestedOneWithoutUsuarioInput
    bitacoras?: BitacoraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutLog_montosInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
    id_rol: number
    consultor?: ConsultorUncheckedCreateNestedOneWithoutUsuarioInput
    bitacoras?: BitacoraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutLog_montosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLog_montosInput, UsuarioUncheckedCreateWithoutLog_montosInput>
  }

  export type ProyectoUpsertWithoutLog_montosInput = {
    update: XOR<ProyectoUpdateWithoutLog_montosInput, ProyectoUncheckedUpdateWithoutLog_montosInput>
    create: XOR<ProyectoCreateWithoutLog_montosInput, ProyectoUncheckedCreateWithoutLog_montosInput>
    where?: ProyectoWhereInput
  }

  export type ProyectoUpdateToOneWithWhereWithoutLog_montosInput = {
    where?: ProyectoWhereInput
    data: XOR<ProyectoUpdateWithoutLog_montosInput, ProyectoUncheckedUpdateWithoutLog_montosInput>
  }

  export type ProyectoUpdateWithoutLog_montosInput = {
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutProyectosNestedInput
    consultor?: ConsultorUpdateOneRequiredWithoutProyectosNestedInput
    estado_proyecto?: EstadoProyectoUpdateOneRequiredWithoutProyectosNestedInput
    bitacoras?: BitacoraUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateWithoutLog_montosInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_consultor?: IntFieldUpdateOperationsInput | number
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    bitacoras?: BitacoraUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type UsuarioUpsertWithoutLog_montosInput = {
    update: XOR<UsuarioUpdateWithoutLog_montosInput, UsuarioUncheckedUpdateWithoutLog_montosInput>
    create: XOR<UsuarioCreateWithoutLog_montosInput, UsuarioUncheckedCreateWithoutLog_montosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLog_montosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLog_montosInput, UsuarioUncheckedUpdateWithoutLog_montosInput>
  }

  export type UsuarioUpdateWithoutLog_montosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    consultor?: ConsultorUpdateOneWithoutUsuarioNestedInput
    bitacoras?: BitacoraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLog_montosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_rol?: IntFieldUpdateOperationsInput | number
    consultor?: ConsultorUncheckedUpdateOneWithoutUsuarioNestedInput
    bitacoras?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyRolInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    correo: string
    contrasena: string
    activo?: boolean
  }

  export type UsuarioUpdateWithoutRolInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    consultor?: ConsultorUpdateOneWithoutUsuarioNestedInput
    bitacoras?: BitacoraUpdateManyWithoutUsuarioNestedInput
    log_montos?: LogMontoProyectoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    consultor?: ConsultorUncheckedUpdateOneWithoutUsuarioNestedInput
    bitacoras?: BitacoraUncheckedUpdateManyWithoutUsuarioNestedInput
    log_montos?: LogMontoProyectoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BitacoraCreateManyUsuarioInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_estado_proyecto: number
    id_proyecto: number
    id_prioridad: number
  }

  export type LogMontoProyectoCreateManyUsuarioInput = {
    id_log_montos?: number
    monto: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    fecha: Date | string
    id_proyecto: number
  }

  export type BitacoraUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado_proyecto?: EstadoProyectoUpdateOneRequiredWithoutBitacorasNestedInput
    proyecto?: ProyectoUpdateOneRequiredWithoutBitacorasNestedInput
    prioridad?: PrioridadUpdateOneRequiredWithoutBitacorasNestedInput
  }

  export type BitacoraUncheckedUpdateWithoutUsuarioInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_prioridad?: IntFieldUpdateOperationsInput | number
  }

  export type BitacoraUncheckedUpdateManyWithoutUsuarioInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_prioridad?: IntFieldUpdateOperationsInput | number
  }

  export type LogMontoProyectoUpdateWithoutUsuarioInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proyecto?: ProyectoUpdateOneRequiredWithoutLog_montosNestedInput
  }

  export type LogMontoProyectoUncheckedUpdateWithoutUsuarioInput = {
    id_log_montos?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type LogMontoProyectoUncheckedUpdateManyWithoutUsuarioInput = {
    id_log_montos?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteCreateManyEmpresaInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    id_estado_cliente: number
  }

  export type ClienteUpdateWithoutEmpresaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    estado_cliente?: EstadoClienteUpdateOneRequiredWithoutClientesNestedInput
    proyectos?: ProyectoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutEmpresaInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_cliente?: IntFieldUpdateOperationsInput | number
    proyectos?: ProyectoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutEmpresaInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteCreateManyEstado_clienteInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo?: string | null
    telefono?: string | null
    id_empresa: number
  }

  export type ClienteUpdateWithoutEstado_clienteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutClientesNestedInput
    proyectos?: ProyectoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutEstado_clienteInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: IntFieldUpdateOperationsInput | number
    proyectos?: ProyectoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutEstado_clienteInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: IntFieldUpdateOperationsInput | number
  }

  export type ProyectoCreateManyClienteInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_consultor: number
    id_estado_proyecto: number
  }

  export type ProyectoUpdateWithoutClienteInput = {
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultor?: ConsultorUpdateOneRequiredWithoutProyectosNestedInput
    estado_proyecto?: EstadoProyectoUpdateOneRequiredWithoutProyectosNestedInput
    bitacoras?: BitacoraUpdateManyWithoutProyectoNestedInput
    log_montos?: LogMontoProyectoUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateWithoutClienteInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_consultor?: IntFieldUpdateOperationsInput | number
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    bitacoras?: BitacoraUncheckedUpdateManyWithoutProyectoNestedInput
    log_montos?: LogMontoProyectoUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateManyWithoutClienteInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_consultor?: IntFieldUpdateOperationsInput | number
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type ProyectoCreateManyConsultorInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_cliente: number
    id_estado_proyecto: number
  }

  export type ProyectoUpdateWithoutConsultorInput = {
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutProyectosNestedInput
    estado_proyecto?: EstadoProyectoUpdateOneRequiredWithoutProyectosNestedInput
    bitacoras?: BitacoraUpdateManyWithoutProyectoNestedInput
    log_montos?: LogMontoProyectoUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateWithoutConsultorInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    bitacoras?: BitacoraUncheckedUpdateManyWithoutProyectoNestedInput
    log_montos?: LogMontoProyectoUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateManyWithoutConsultorInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type ProyectoCreateManyEstado_proyectoInput = {
    id_proyecto?: number
    no_proyecto: string
    nombre?: string | null
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_cliente: number
    id_consultor: number
  }

  export type BitacoraCreateManyEstado_proyectoInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_proyecto: number
    id_usuario: number
    id_prioridad: number
  }

  export type ProyectoUpdateWithoutEstado_proyectoInput = {
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutProyectosNestedInput
    consultor?: ConsultorUpdateOneRequiredWithoutProyectosNestedInput
    bitacoras?: BitacoraUpdateManyWithoutProyectoNestedInput
    log_montos?: LogMontoProyectoUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateWithoutEstado_proyectoInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_consultor?: IntFieldUpdateOperationsInput | number
    bitacoras?: BitacoraUncheckedUpdateManyWithoutProyectoNestedInput
    log_montos?: LogMontoProyectoUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateManyWithoutEstado_proyectoInput = {
    id_proyecto?: IntFieldUpdateOperationsInput | number
    no_proyecto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_consultor?: IntFieldUpdateOperationsInput | number
  }

  export type BitacoraUpdateWithoutEstado_proyectoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: ProyectoUpdateOneRequiredWithoutBitacorasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutBitacorasNestedInput
    prioridad?: PrioridadUpdateOneRequiredWithoutBitacorasNestedInput
  }

  export type BitacoraUncheckedUpdateWithoutEstado_proyectoInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_prioridad?: IntFieldUpdateOperationsInput | number
  }

  export type BitacoraUncheckedUpdateManyWithoutEstado_proyectoInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_prioridad?: IntFieldUpdateOperationsInput | number
  }

  export type BitacoraCreateManyProyectoInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_estado_proyecto: number
    id_usuario: number
    id_prioridad: number
  }

  export type LogMontoProyectoCreateManyProyectoInput = {
    id_log_montos?: number
    monto: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    fecha: Date | string
    id_usuario: number
  }

  export type BitacoraUpdateWithoutProyectoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado_proyecto?: EstadoProyectoUpdateOneRequiredWithoutBitacorasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutBitacorasNestedInput
    prioridad?: PrioridadUpdateOneRequiredWithoutBitacorasNestedInput
  }

  export type BitacoraUncheckedUpdateWithoutProyectoInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_prioridad?: IntFieldUpdateOperationsInput | number
  }

  export type BitacoraUncheckedUpdateManyWithoutProyectoInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_prioridad?: IntFieldUpdateOperationsInput | number
  }

  export type LogMontoProyectoUpdateWithoutProyectoInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLog_montosNestedInput
  }

  export type LogMontoProyectoUncheckedUpdateWithoutProyectoInput = {
    id_log_montos?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type LogMontoProyectoUncheckedUpdateManyWithoutProyectoInput = {
    id_log_montos?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type BitacoraCreateManyPrioridadInput = {
    id_bitacora?: number
    fecha: Date | string
    observaciones?: string | null
    id_estado_proyecto: number
    id_proyecto: number
    id_usuario: number
  }

  export type BitacoraUpdateWithoutPrioridadInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado_proyecto?: EstadoProyectoUpdateOneRequiredWithoutBitacorasNestedInput
    proyecto?: ProyectoUpdateOneRequiredWithoutBitacorasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutBitacorasNestedInput
  }

  export type BitacoraUncheckedUpdateWithoutPrioridadInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type BitacoraUncheckedUpdateManyWithoutPrioridadInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado_proyecto?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}