
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TodayActivity
 * 
 */
export type TodayActivity = $Result.DefaultSelection<Prisma.$TodayActivityPayload>
/**
 * Model WeeklySummary
 * 
 */
export type WeeklySummary = $Result.DefaultSelection<Prisma.$WeeklySummaryPayload>
/**
 * Model Friends
 * 
 */
export type Friends = $Result.DefaultSelection<Prisma.$FriendsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todayActivity`: Exposes CRUD operations for the **TodayActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodayActivities
    * const todayActivities = await prisma.todayActivity.findMany()
    * ```
    */
  get todayActivity(): Prisma.TodayActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklySummary`: Exposes CRUD operations for the **WeeklySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklySummaries
    * const weeklySummaries = await prisma.weeklySummary.findMany()
    * ```
    */
  get weeklySummary(): Prisma.WeeklySummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friends`: Exposes CRUD operations for the **Friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friends.findMany()
    * ```
    */
  get friends(): Prisma.FriendsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    TodayActivity: 'TodayActivity',
    WeeklySummary: 'WeeklySummary',
    Friends: 'Friends'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "todayActivity" | "weeklySummary" | "friends"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TodayActivity: {
        payload: Prisma.$TodayActivityPayload<ExtArgs>
        fields: Prisma.TodayActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodayActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodayActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload>
          }
          findFirst: {
            args: Prisma.TodayActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodayActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload>
          }
          findMany: {
            args: Prisma.TodayActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload>[]
          }
          create: {
            args: Prisma.TodayActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload>
          }
          createMany: {
            args: Prisma.TodayActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodayActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload>[]
          }
          delete: {
            args: Prisma.TodayActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload>
          }
          update: {
            args: Prisma.TodayActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload>
          }
          deleteMany: {
            args: Prisma.TodayActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodayActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TodayActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload>[]
          }
          upsert: {
            args: Prisma.TodayActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayActivityPayload>
          }
          aggregate: {
            args: Prisma.TodayActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodayActivity>
          }
          groupBy: {
            args: Prisma.TodayActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodayActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodayActivityCountArgs<ExtArgs>
            result: $Utils.Optional<TodayActivityCountAggregateOutputType> | number
          }
        }
      }
      WeeklySummary: {
        payload: Prisma.$WeeklySummaryPayload<ExtArgs>
        fields: Prisma.WeeklySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          findFirst: {
            args: Prisma.WeeklySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          findMany: {
            args: Prisma.WeeklySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          create: {
            args: Prisma.WeeklySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          createMany: {
            args: Prisma.WeeklySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklySummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          delete: {
            args: Prisma.WeeklySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          update: {
            args: Prisma.WeeklySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          deleteMany: {
            args: Prisma.WeeklySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklySummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>[]
          }
          upsert: {
            args: Prisma.WeeklySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySummaryPayload>
          }
          aggregate: {
            args: Prisma.WeeklySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklySummary>
          }
          groupBy: {
            args: Prisma.WeeklySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklySummaryCountAggregateOutputType> | number
          }
        }
      }
      Friends: {
        payload: Prisma.$FriendsPayload<ExtArgs>
        fields: Prisma.FriendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          findFirst: {
            args: Prisma.FriendsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          findMany: {
            args: Prisma.FriendsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>[]
          }
          create: {
            args: Prisma.FriendsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          createMany: {
            args: Prisma.FriendsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>[]
          }
          delete: {
            args: Prisma.FriendsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          update: {
            args: Prisma.FriendsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          deleteMany: {
            args: Prisma.FriendsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>[]
          }
          upsert: {
            args: Prisma.FriendsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          aggregate: {
            args: Prisma.FriendsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriends>
          }
          groupBy: {
            args: Prisma.FriendsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendsCountArgs<ExtArgs>
            result: $Utils.Optional<FriendsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    todayActivity?: TodayActivityOmit
    weeklySummary?: WeeklySummaryOmit
    friends?: FriendsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    todayActivities: number
    weeklySummaries: number
    friends: number
    friendOf: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todayActivities?: boolean | UserCountOutputTypeCountTodayActivitiesArgs
    weeklySummaries?: boolean | UserCountOutputTypeCountWeeklySummariesArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodayActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySummaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    phone: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    phone: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    phone: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    phone?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    phone?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    phone?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    username: string
    phone: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    todayActivities?: boolean | User$todayActivitiesArgs<ExtArgs>
    weeklySummaries?: boolean | User$weeklySummariesArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "phone" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todayActivities?: boolean | User$todayActivitiesArgs<ExtArgs>
    weeklySummaries?: boolean | User$weeklySummariesArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      todayActivities: Prisma.$TodayActivityPayload<ExtArgs>[]
      weeklySummaries: Prisma.$WeeklySummaryPayload<ExtArgs>[]
      friends: Prisma.$FriendsPayload<ExtArgs>[]
      friendOf: Prisma.$FriendsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      phone: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    todayActivities<T extends User$todayActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$todayActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklySummaries<T extends User$weeklySummariesArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklySummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.todayActivities
   */
  export type User$todayActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    where?: TodayActivityWhereInput
    orderBy?: TodayActivityOrderByWithRelationInput | TodayActivityOrderByWithRelationInput[]
    cursor?: TodayActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodayActivityScalarFieldEnum | TodayActivityScalarFieldEnum[]
  }

  /**
   * User.weeklySummaries
   */
  export type User$weeklySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    where?: WeeklySummaryWhereInput
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    cursor?: WeeklySummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    where?: FriendsWhereInput
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    cursor?: FriendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    where?: FriendsWhereInput
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    cursor?: FriendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TodayActivity
   */

  export type AggregateTodayActivity = {
    _count: TodayActivityCountAggregateOutputType | null
    _avg: TodayActivityAvgAggregateOutputType | null
    _sum: TodayActivitySumAggregateOutputType | null
    _min: TodayActivityMinAggregateOutputType | null
    _max: TodayActivityMaxAggregateOutputType | null
  }

  export type TodayActivityAvgAggregateOutputType = {
    id: number | null
    steps: number | null
    sleep_hours: number | null
    calories: number | null
    water_glasses: number | null
    user_id: number | null
  }

  export type TodayActivitySumAggregateOutputType = {
    id: number | null
    steps: number | null
    sleep_hours: number | null
    calories: number | null
    water_glasses: number | null
    user_id: number | null
  }

  export type TodayActivityMinAggregateOutputType = {
    id: number | null
    date: Date | null
    steps: number | null
    sleep_hours: number | null
    calories: number | null
    water_glasses: number | null
    user_id: number | null
  }

  export type TodayActivityMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    steps: number | null
    sleep_hours: number | null
    calories: number | null
    water_glasses: number | null
    user_id: number | null
  }

  export type TodayActivityCountAggregateOutputType = {
    id: number
    date: number
    steps: number
    sleep_hours: number
    calories: number
    water_glasses: number
    user_id: number
    _all: number
  }


  export type TodayActivityAvgAggregateInputType = {
    id?: true
    steps?: true
    sleep_hours?: true
    calories?: true
    water_glasses?: true
    user_id?: true
  }

  export type TodayActivitySumAggregateInputType = {
    id?: true
    steps?: true
    sleep_hours?: true
    calories?: true
    water_glasses?: true
    user_id?: true
  }

  export type TodayActivityMinAggregateInputType = {
    id?: true
    date?: true
    steps?: true
    sleep_hours?: true
    calories?: true
    water_glasses?: true
    user_id?: true
  }

  export type TodayActivityMaxAggregateInputType = {
    id?: true
    date?: true
    steps?: true
    sleep_hours?: true
    calories?: true
    water_glasses?: true
    user_id?: true
  }

  export type TodayActivityCountAggregateInputType = {
    id?: true
    date?: true
    steps?: true
    sleep_hours?: true
    calories?: true
    water_glasses?: true
    user_id?: true
    _all?: true
  }

  export type TodayActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodayActivity to aggregate.
     */
    where?: TodayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayActivities to fetch.
     */
    orderBy?: TodayActivityOrderByWithRelationInput | TodayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TodayActivities
    **/
    _count?: true | TodayActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodayActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodayActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodayActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodayActivityMaxAggregateInputType
  }

  export type GetTodayActivityAggregateType<T extends TodayActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateTodayActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodayActivity[P]>
      : GetScalarType<T[P], AggregateTodayActivity[P]>
  }




  export type TodayActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayActivityWhereInput
    orderBy?: TodayActivityOrderByWithAggregationInput | TodayActivityOrderByWithAggregationInput[]
    by: TodayActivityScalarFieldEnum[] | TodayActivityScalarFieldEnum
    having?: TodayActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodayActivityCountAggregateInputType | true
    _avg?: TodayActivityAvgAggregateInputType
    _sum?: TodayActivitySumAggregateInputType
    _min?: TodayActivityMinAggregateInputType
    _max?: TodayActivityMaxAggregateInputType
  }

  export type TodayActivityGroupByOutputType = {
    id: number
    date: Date
    steps: number
    sleep_hours: number
    calories: number
    water_glasses: number
    user_id: number
    _count: TodayActivityCountAggregateOutputType | null
    _avg: TodayActivityAvgAggregateOutputType | null
    _sum: TodayActivitySumAggregateOutputType | null
    _min: TodayActivityMinAggregateOutputType | null
    _max: TodayActivityMaxAggregateOutputType | null
  }

  type GetTodayActivityGroupByPayload<T extends TodayActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodayActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodayActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodayActivityGroupByOutputType[P]>
            : GetScalarType<T[P], TodayActivityGroupByOutputType[P]>
        }
      >
    >


  export type TodayActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    steps?: boolean
    sleep_hours?: boolean
    calories?: boolean
    water_glasses?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayActivity"]>

  export type TodayActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    steps?: boolean
    sleep_hours?: boolean
    calories?: boolean
    water_glasses?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayActivity"]>

  export type TodayActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    steps?: boolean
    sleep_hours?: boolean
    calories?: boolean
    water_glasses?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayActivity"]>

  export type TodayActivitySelectScalar = {
    id?: boolean
    date?: boolean
    steps?: boolean
    sleep_hours?: boolean
    calories?: boolean
    water_glasses?: boolean
    user_id?: boolean
  }

  export type TodayActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "steps" | "sleep_hours" | "calories" | "water_glasses" | "user_id", ExtArgs["result"]["todayActivity"]>
  export type TodayActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodayActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodayActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TodayActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TodayActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      steps: number
      sleep_hours: number
      calories: number
      water_glasses: number
      user_id: number
    }, ExtArgs["result"]["todayActivity"]>
    composites: {}
  }

  type TodayActivityGetPayload<S extends boolean | null | undefined | TodayActivityDefaultArgs> = $Result.GetResult<Prisma.$TodayActivityPayload, S>

  type TodayActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodayActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodayActivityCountAggregateInputType | true
    }

  export interface TodayActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TodayActivity'], meta: { name: 'TodayActivity' } }
    /**
     * Find zero or one TodayActivity that matches the filter.
     * @param {TodayActivityFindUniqueArgs} args - Arguments to find a TodayActivity
     * @example
     * // Get one TodayActivity
     * const todayActivity = await prisma.todayActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodayActivityFindUniqueArgs>(args: SelectSubset<T, TodayActivityFindUniqueArgs<ExtArgs>>): Prisma__TodayActivityClient<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TodayActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodayActivityFindUniqueOrThrowArgs} args - Arguments to find a TodayActivity
     * @example
     * // Get one TodayActivity
     * const todayActivity = await prisma.todayActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodayActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, TodayActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodayActivityClient<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodayActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayActivityFindFirstArgs} args - Arguments to find a TodayActivity
     * @example
     * // Get one TodayActivity
     * const todayActivity = await prisma.todayActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodayActivityFindFirstArgs>(args?: SelectSubset<T, TodayActivityFindFirstArgs<ExtArgs>>): Prisma__TodayActivityClient<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodayActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayActivityFindFirstOrThrowArgs} args - Arguments to find a TodayActivity
     * @example
     * // Get one TodayActivity
     * const todayActivity = await prisma.todayActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodayActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, TodayActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodayActivityClient<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TodayActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TodayActivities
     * const todayActivities = await prisma.todayActivity.findMany()
     * 
     * // Get first 10 TodayActivities
     * const todayActivities = await prisma.todayActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todayActivityWithIdOnly = await prisma.todayActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodayActivityFindManyArgs>(args?: SelectSubset<T, TodayActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TodayActivity.
     * @param {TodayActivityCreateArgs} args - Arguments to create a TodayActivity.
     * @example
     * // Create one TodayActivity
     * const TodayActivity = await prisma.todayActivity.create({
     *   data: {
     *     // ... data to create a TodayActivity
     *   }
     * })
     * 
     */
    create<T extends TodayActivityCreateArgs>(args: SelectSubset<T, TodayActivityCreateArgs<ExtArgs>>): Prisma__TodayActivityClient<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TodayActivities.
     * @param {TodayActivityCreateManyArgs} args - Arguments to create many TodayActivities.
     * @example
     * // Create many TodayActivities
     * const todayActivity = await prisma.todayActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodayActivityCreateManyArgs>(args?: SelectSubset<T, TodayActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TodayActivities and returns the data saved in the database.
     * @param {TodayActivityCreateManyAndReturnArgs} args - Arguments to create many TodayActivities.
     * @example
     * // Create many TodayActivities
     * const todayActivity = await prisma.todayActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TodayActivities and only return the `id`
     * const todayActivityWithIdOnly = await prisma.todayActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodayActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, TodayActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TodayActivity.
     * @param {TodayActivityDeleteArgs} args - Arguments to delete one TodayActivity.
     * @example
     * // Delete one TodayActivity
     * const TodayActivity = await prisma.todayActivity.delete({
     *   where: {
     *     // ... filter to delete one TodayActivity
     *   }
     * })
     * 
     */
    delete<T extends TodayActivityDeleteArgs>(args: SelectSubset<T, TodayActivityDeleteArgs<ExtArgs>>): Prisma__TodayActivityClient<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TodayActivity.
     * @param {TodayActivityUpdateArgs} args - Arguments to update one TodayActivity.
     * @example
     * // Update one TodayActivity
     * const todayActivity = await prisma.todayActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodayActivityUpdateArgs>(args: SelectSubset<T, TodayActivityUpdateArgs<ExtArgs>>): Prisma__TodayActivityClient<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TodayActivities.
     * @param {TodayActivityDeleteManyArgs} args - Arguments to filter TodayActivities to delete.
     * @example
     * // Delete a few TodayActivities
     * const { count } = await prisma.todayActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodayActivityDeleteManyArgs>(args?: SelectSubset<T, TodayActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodayActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TodayActivities
     * const todayActivity = await prisma.todayActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodayActivityUpdateManyArgs>(args: SelectSubset<T, TodayActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodayActivities and returns the data updated in the database.
     * @param {TodayActivityUpdateManyAndReturnArgs} args - Arguments to update many TodayActivities.
     * @example
     * // Update many TodayActivities
     * const todayActivity = await prisma.todayActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TodayActivities and only return the `id`
     * const todayActivityWithIdOnly = await prisma.todayActivity.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TodayActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, TodayActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TodayActivity.
     * @param {TodayActivityUpsertArgs} args - Arguments to update or create a TodayActivity.
     * @example
     * // Update or create a TodayActivity
     * const todayActivity = await prisma.todayActivity.upsert({
     *   create: {
     *     // ... data to create a TodayActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TodayActivity we want to update
     *   }
     * })
     */
    upsert<T extends TodayActivityUpsertArgs>(args: SelectSubset<T, TodayActivityUpsertArgs<ExtArgs>>): Prisma__TodayActivityClient<$Result.GetResult<Prisma.$TodayActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TodayActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayActivityCountArgs} args - Arguments to filter TodayActivities to count.
     * @example
     * // Count the number of TodayActivities
     * const count = await prisma.todayActivity.count({
     *   where: {
     *     // ... the filter for the TodayActivities we want to count
     *   }
     * })
    **/
    count<T extends TodayActivityCountArgs>(
      args?: Subset<T, TodayActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodayActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TodayActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TodayActivityAggregateArgs>(args: Subset<T, TodayActivityAggregateArgs>): Prisma.PrismaPromise<GetTodayActivityAggregateType<T>>

    /**
     * Group by TodayActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayActivityGroupByArgs} args - Group by arguments.
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
      T extends TodayActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodayActivityGroupByArgs['orderBy'] }
        : { orderBy?: TodayActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TodayActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodayActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TodayActivity model
   */
  readonly fields: TodayActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TodayActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodayActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TodayActivity model
   */
  interface TodayActivityFieldRefs {
    readonly id: FieldRef<"TodayActivity", 'Int'>
    readonly date: FieldRef<"TodayActivity", 'DateTime'>
    readonly steps: FieldRef<"TodayActivity", 'Int'>
    readonly sleep_hours: FieldRef<"TodayActivity", 'Float'>
    readonly calories: FieldRef<"TodayActivity", 'Int'>
    readonly water_glasses: FieldRef<"TodayActivity", 'Int'>
    readonly user_id: FieldRef<"TodayActivity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TodayActivity findUnique
   */
  export type TodayActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    /**
     * Filter, which TodayActivity to fetch.
     */
    where: TodayActivityWhereUniqueInput
  }

  /**
   * TodayActivity findUniqueOrThrow
   */
  export type TodayActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    /**
     * Filter, which TodayActivity to fetch.
     */
    where: TodayActivityWhereUniqueInput
  }

  /**
   * TodayActivity findFirst
   */
  export type TodayActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    /**
     * Filter, which TodayActivity to fetch.
     */
    where?: TodayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayActivities to fetch.
     */
    orderBy?: TodayActivityOrderByWithRelationInput | TodayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodayActivities.
     */
    cursor?: TodayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodayActivities.
     */
    distinct?: TodayActivityScalarFieldEnum | TodayActivityScalarFieldEnum[]
  }

  /**
   * TodayActivity findFirstOrThrow
   */
  export type TodayActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    /**
     * Filter, which TodayActivity to fetch.
     */
    where?: TodayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayActivities to fetch.
     */
    orderBy?: TodayActivityOrderByWithRelationInput | TodayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodayActivities.
     */
    cursor?: TodayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodayActivities.
     */
    distinct?: TodayActivityScalarFieldEnum | TodayActivityScalarFieldEnum[]
  }

  /**
   * TodayActivity findMany
   */
  export type TodayActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    /**
     * Filter, which TodayActivities to fetch.
     */
    where?: TodayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayActivities to fetch.
     */
    orderBy?: TodayActivityOrderByWithRelationInput | TodayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TodayActivities.
     */
    cursor?: TodayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayActivities.
     */
    skip?: number
    distinct?: TodayActivityScalarFieldEnum | TodayActivityScalarFieldEnum[]
  }

  /**
   * TodayActivity create
   */
  export type TodayActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a TodayActivity.
     */
    data: XOR<TodayActivityCreateInput, TodayActivityUncheckedCreateInput>
  }

  /**
   * TodayActivity createMany
   */
  export type TodayActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TodayActivities.
     */
    data: TodayActivityCreateManyInput | TodayActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TodayActivity createManyAndReturn
   */
  export type TodayActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * The data used to create many TodayActivities.
     */
    data: TodayActivityCreateManyInput | TodayActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodayActivity update
   */
  export type TodayActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a TodayActivity.
     */
    data: XOR<TodayActivityUpdateInput, TodayActivityUncheckedUpdateInput>
    /**
     * Choose, which TodayActivity to update.
     */
    where: TodayActivityWhereUniqueInput
  }

  /**
   * TodayActivity updateMany
   */
  export type TodayActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TodayActivities.
     */
    data: XOR<TodayActivityUpdateManyMutationInput, TodayActivityUncheckedUpdateManyInput>
    /**
     * Filter which TodayActivities to update
     */
    where?: TodayActivityWhereInput
    /**
     * Limit how many TodayActivities to update.
     */
    limit?: number
  }

  /**
   * TodayActivity updateManyAndReturn
   */
  export type TodayActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * The data used to update TodayActivities.
     */
    data: XOR<TodayActivityUpdateManyMutationInput, TodayActivityUncheckedUpdateManyInput>
    /**
     * Filter which TodayActivities to update
     */
    where?: TodayActivityWhereInput
    /**
     * Limit how many TodayActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodayActivity upsert
   */
  export type TodayActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the TodayActivity to update in case it exists.
     */
    where: TodayActivityWhereUniqueInput
    /**
     * In case the TodayActivity found by the `where` argument doesn't exist, create a new TodayActivity with this data.
     */
    create: XOR<TodayActivityCreateInput, TodayActivityUncheckedCreateInput>
    /**
     * In case the TodayActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodayActivityUpdateInput, TodayActivityUncheckedUpdateInput>
  }

  /**
   * TodayActivity delete
   */
  export type TodayActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
    /**
     * Filter which TodayActivity to delete.
     */
    where: TodayActivityWhereUniqueInput
  }

  /**
   * TodayActivity deleteMany
   */
  export type TodayActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodayActivities to delete
     */
    where?: TodayActivityWhereInput
    /**
     * Limit how many TodayActivities to delete.
     */
    limit?: number
  }

  /**
   * TodayActivity without action
   */
  export type TodayActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayActivity
     */
    select?: TodayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayActivity
     */
    omit?: TodayActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayActivityInclude<ExtArgs> | null
  }


  /**
   * Model WeeklySummary
   */

  export type AggregateWeeklySummary = {
    _count: WeeklySummaryCountAggregateOutputType | null
    _avg: WeeklySummaryAvgAggregateOutputType | null
    _sum: WeeklySummarySumAggregateOutputType | null
    _min: WeeklySummaryMinAggregateOutputType | null
    _max: WeeklySummaryMaxAggregateOutputType | null
  }

  export type WeeklySummaryAvgAggregateOutputType = {
    id: number | null
    avg_steps: number | null
    avg_sleep: number | null
    avg_water: number | null
    avg_calories: number | null
    score_steps: number | null
    score_sleep: number | null
    score_water: number | null
    score_calories: number | null
    user_id: number | null
  }

  export type WeeklySummarySumAggregateOutputType = {
    id: number | null
    avg_steps: number | null
    avg_sleep: number | null
    avg_water: number | null
    avg_calories: number | null
    score_steps: number | null
    score_sleep: number | null
    score_water: number | null
    score_calories: number | null
    user_id: number | null
  }

  export type WeeklySummaryMinAggregateOutputType = {
    id: number | null
    week_start_date: Date | null
    avg_steps: number | null
    avg_sleep: number | null
    avg_water: number | null
    avg_calories: number | null
    score_steps: number | null
    score_sleep: number | null
    score_water: number | null
    score_calories: number | null
    user_id: number | null
  }

  export type WeeklySummaryMaxAggregateOutputType = {
    id: number | null
    week_start_date: Date | null
    avg_steps: number | null
    avg_sleep: number | null
    avg_water: number | null
    avg_calories: number | null
    score_steps: number | null
    score_sleep: number | null
    score_water: number | null
    score_calories: number | null
    user_id: number | null
  }

  export type WeeklySummaryCountAggregateOutputType = {
    id: number
    week_start_date: number
    avg_steps: number
    avg_sleep: number
    avg_water: number
    avg_calories: number
    score_steps: number
    score_sleep: number
    score_water: number
    score_calories: number
    user_id: number
    _all: number
  }


  export type WeeklySummaryAvgAggregateInputType = {
    id?: true
    avg_steps?: true
    avg_sleep?: true
    avg_water?: true
    avg_calories?: true
    score_steps?: true
    score_sleep?: true
    score_water?: true
    score_calories?: true
    user_id?: true
  }

  export type WeeklySummarySumAggregateInputType = {
    id?: true
    avg_steps?: true
    avg_sleep?: true
    avg_water?: true
    avg_calories?: true
    score_steps?: true
    score_sleep?: true
    score_water?: true
    score_calories?: true
    user_id?: true
  }

  export type WeeklySummaryMinAggregateInputType = {
    id?: true
    week_start_date?: true
    avg_steps?: true
    avg_sleep?: true
    avg_water?: true
    avg_calories?: true
    score_steps?: true
    score_sleep?: true
    score_water?: true
    score_calories?: true
    user_id?: true
  }

  export type WeeklySummaryMaxAggregateInputType = {
    id?: true
    week_start_date?: true
    avg_steps?: true
    avg_sleep?: true
    avg_water?: true
    avg_calories?: true
    score_steps?: true
    score_sleep?: true
    score_water?: true
    score_calories?: true
    user_id?: true
  }

  export type WeeklySummaryCountAggregateInputType = {
    id?: true
    week_start_date?: true
    avg_steps?: true
    avg_sleep?: true
    avg_water?: true
    avg_calories?: true
    score_steps?: true
    score_sleep?: true
    score_water?: true
    score_calories?: true
    user_id?: true
    _all?: true
  }

  export type WeeklySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySummary to aggregate.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklySummaries
    **/
    _count?: true | WeeklySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklySummaryMaxAggregateInputType
  }

  export type GetWeeklySummaryAggregateType<T extends WeeklySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklySummary[P]>
      : GetScalarType<T[P], AggregateWeeklySummary[P]>
  }




  export type WeeklySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySummaryWhereInput
    orderBy?: WeeklySummaryOrderByWithAggregationInput | WeeklySummaryOrderByWithAggregationInput[]
    by: WeeklySummaryScalarFieldEnum[] | WeeklySummaryScalarFieldEnum
    having?: WeeklySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklySummaryCountAggregateInputType | true
    _avg?: WeeklySummaryAvgAggregateInputType
    _sum?: WeeklySummarySumAggregateInputType
    _min?: WeeklySummaryMinAggregateInputType
    _max?: WeeklySummaryMaxAggregateInputType
  }

  export type WeeklySummaryGroupByOutputType = {
    id: number
    week_start_date: Date
    avg_steps: number
    avg_sleep: number
    avg_water: number
    avg_calories: number
    score_steps: number
    score_sleep: number
    score_water: number
    score_calories: number
    user_id: number
    _count: WeeklySummaryCountAggregateOutputType | null
    _avg: WeeklySummaryAvgAggregateOutputType | null
    _sum: WeeklySummarySumAggregateOutputType | null
    _min: WeeklySummaryMinAggregateOutputType | null
    _max: WeeklySummaryMaxAggregateOutputType | null
  }

  type GetWeeklySummaryGroupByPayload<T extends WeeklySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklySummaryGroupByOutputType[P]>
        }
      >
    >


  export type WeeklySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week_start_date?: boolean
    avg_steps?: boolean
    avg_sleep?: boolean
    avg_water?: boolean
    avg_calories?: boolean
    score_steps?: boolean
    score_sleep?: boolean
    score_water?: boolean
    score_calories?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week_start_date?: boolean
    avg_steps?: boolean
    avg_sleep?: boolean
    avg_water?: boolean
    avg_calories?: boolean
    score_steps?: boolean
    score_sleep?: boolean
    score_water?: boolean
    score_calories?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week_start_date?: boolean
    avg_steps?: boolean
    avg_sleep?: boolean
    avg_water?: boolean
    avg_calories?: boolean
    score_steps?: boolean
    score_sleep?: boolean
    score_water?: boolean
    score_calories?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySummary"]>

  export type WeeklySummarySelectScalar = {
    id?: boolean
    week_start_date?: boolean
    avg_steps?: boolean
    avg_sleep?: boolean
    avg_water?: boolean
    avg_calories?: boolean
    score_steps?: boolean
    score_sleep?: boolean
    score_water?: boolean
    score_calories?: boolean
    user_id?: boolean
  }

  export type WeeklySummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "week_start_date" | "avg_steps" | "avg_sleep" | "avg_water" | "avg_calories" | "score_steps" | "score_sleep" | "score_water" | "score_calories" | "user_id", ExtArgs["result"]["weeklySummary"]>
  export type WeeklySummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklySummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklySummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklySummary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      week_start_date: Date
      avg_steps: number
      avg_sleep: number
      avg_water: number
      avg_calories: number
      score_steps: number
      score_sleep: number
      score_water: number
      score_calories: number
      user_id: number
    }, ExtArgs["result"]["weeklySummary"]>
    composites: {}
  }

  type WeeklySummaryGetPayload<S extends boolean | null | undefined | WeeklySummaryDefaultArgs> = $Result.GetResult<Prisma.$WeeklySummaryPayload, S>

  type WeeklySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklySummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklySummaryCountAggregateInputType | true
    }

  export interface WeeklySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklySummary'], meta: { name: 'WeeklySummary' } }
    /**
     * Find zero or one WeeklySummary that matches the filter.
     * @param {WeeklySummaryFindUniqueArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklySummaryFindUniqueArgs>(args: SelectSubset<T, WeeklySummaryFindUniqueArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklySummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklySummaryFindUniqueOrThrowArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindFirstArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklySummaryFindFirstArgs>(args?: SelectSubset<T, WeeklySummaryFindFirstArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindFirstOrThrowArgs} args - Arguments to find a WeeklySummary
     * @example
     * // Get one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklySummaries
     * const weeklySummaries = await prisma.weeklySummary.findMany()
     * 
     * // Get first 10 WeeklySummaries
     * const weeklySummaries = await prisma.weeklySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklySummaryFindManyArgs>(args?: SelectSubset<T, WeeklySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklySummary.
     * @param {WeeklySummaryCreateArgs} args - Arguments to create a WeeklySummary.
     * @example
     * // Create one WeeklySummary
     * const WeeklySummary = await prisma.weeklySummary.create({
     *   data: {
     *     // ... data to create a WeeklySummary
     *   }
     * })
     * 
     */
    create<T extends WeeklySummaryCreateArgs>(args: SelectSubset<T, WeeklySummaryCreateArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklySummaries.
     * @param {WeeklySummaryCreateManyArgs} args - Arguments to create many WeeklySummaries.
     * @example
     * // Create many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklySummaryCreateManyArgs>(args?: SelectSubset<T, WeeklySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklySummaries and returns the data saved in the database.
     * @param {WeeklySummaryCreateManyAndReturnArgs} args - Arguments to create many WeeklySummaries.
     * @example
     * // Create many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklySummaries and only return the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklySummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklySummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklySummary.
     * @param {WeeklySummaryDeleteArgs} args - Arguments to delete one WeeklySummary.
     * @example
     * // Delete one WeeklySummary
     * const WeeklySummary = await prisma.weeklySummary.delete({
     *   where: {
     *     // ... filter to delete one WeeklySummary
     *   }
     * })
     * 
     */
    delete<T extends WeeklySummaryDeleteArgs>(args: SelectSubset<T, WeeklySummaryDeleteArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklySummary.
     * @param {WeeklySummaryUpdateArgs} args - Arguments to update one WeeklySummary.
     * @example
     * // Update one WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklySummaryUpdateArgs>(args: SelectSubset<T, WeeklySummaryUpdateArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklySummaries.
     * @param {WeeklySummaryDeleteManyArgs} args - Arguments to filter WeeklySummaries to delete.
     * @example
     * // Delete a few WeeklySummaries
     * const { count } = await prisma.weeklySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklySummaryDeleteManyArgs>(args?: SelectSubset<T, WeeklySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklySummaryUpdateManyArgs>(args: SelectSubset<T, WeeklySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySummaries and returns the data updated in the database.
     * @param {WeeklySummaryUpdateManyAndReturnArgs} args - Arguments to update many WeeklySummaries.
     * @example
     * // Update many WeeklySummaries
     * const weeklySummary = await prisma.weeklySummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklySummaries and only return the `id`
     * const weeklySummaryWithIdOnly = await prisma.weeklySummary.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends WeeklySummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklySummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklySummary.
     * @param {WeeklySummaryUpsertArgs} args - Arguments to update or create a WeeklySummary.
     * @example
     * // Update or create a WeeklySummary
     * const weeklySummary = await prisma.weeklySummary.upsert({
     *   create: {
     *     // ... data to create a WeeklySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklySummary we want to update
     *   }
     * })
     */
    upsert<T extends WeeklySummaryUpsertArgs>(args: SelectSubset<T, WeeklySummaryUpsertArgs<ExtArgs>>): Prisma__WeeklySummaryClient<$Result.GetResult<Prisma.$WeeklySummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryCountArgs} args - Arguments to filter WeeklySummaries to count.
     * @example
     * // Count the number of WeeklySummaries
     * const count = await prisma.weeklySummary.count({
     *   where: {
     *     // ... the filter for the WeeklySummaries we want to count
     *   }
     * })
    **/
    count<T extends WeeklySummaryCountArgs>(
      args?: Subset<T, WeeklySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklySummaryAggregateArgs>(args: Subset<T, WeeklySummaryAggregateArgs>): Prisma.PrismaPromise<GetWeeklySummaryAggregateType<T>>

    /**
     * Group by WeeklySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySummaryGroupByArgs} args - Group by arguments.
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
      T extends WeeklySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklySummaryGroupByArgs['orderBy'] }
        : { orderBy?: WeeklySummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklySummary model
   */
  readonly fields: WeeklySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeeklySummary model
   */
  interface WeeklySummaryFieldRefs {
    readonly id: FieldRef<"WeeklySummary", 'Int'>
    readonly week_start_date: FieldRef<"WeeklySummary", 'DateTime'>
    readonly avg_steps: FieldRef<"WeeklySummary", 'Float'>
    readonly avg_sleep: FieldRef<"WeeklySummary", 'Float'>
    readonly avg_water: FieldRef<"WeeklySummary", 'Float'>
    readonly avg_calories: FieldRef<"WeeklySummary", 'Float'>
    readonly score_steps: FieldRef<"WeeklySummary", 'Int'>
    readonly score_sleep: FieldRef<"WeeklySummary", 'Int'>
    readonly score_water: FieldRef<"WeeklySummary", 'Int'>
    readonly score_calories: FieldRef<"WeeklySummary", 'Int'>
    readonly user_id: FieldRef<"WeeklySummary", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeeklySummary findUnique
   */
  export type WeeklySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary findUniqueOrThrow
   */
  export type WeeklySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary findFirst
   */
  export type WeeklySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySummaries.
     */
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary findFirstOrThrow
   */
  export type WeeklySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummary to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySummaries.
     */
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary findMany
   */
  export type WeeklySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySummaries to fetch.
     */
    where?: WeeklySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySummaries to fetch.
     */
    orderBy?: WeeklySummaryOrderByWithRelationInput | WeeklySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklySummaries.
     */
    cursor?: WeeklySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySummaries.
     */
    skip?: number
    distinct?: WeeklySummaryScalarFieldEnum | WeeklySummaryScalarFieldEnum[]
  }

  /**
   * WeeklySummary create
   */
  export type WeeklySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklySummary.
     */
    data: XOR<WeeklySummaryCreateInput, WeeklySummaryUncheckedCreateInput>
  }

  /**
   * WeeklySummary createMany
   */
  export type WeeklySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklySummaries.
     */
    data: WeeklySummaryCreateManyInput | WeeklySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklySummary createManyAndReturn
   */
  export type WeeklySummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklySummaries.
     */
    data: WeeklySummaryCreateManyInput | WeeklySummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklySummary update
   */
  export type WeeklySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklySummary.
     */
    data: XOR<WeeklySummaryUpdateInput, WeeklySummaryUncheckedUpdateInput>
    /**
     * Choose, which WeeklySummary to update.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary updateMany
   */
  export type WeeklySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklySummaries.
     */
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySummaries to update
     */
    where?: WeeklySummaryWhereInput
    /**
     * Limit how many WeeklySummaries to update.
     */
    limit?: number
  }

  /**
   * WeeklySummary updateManyAndReturn
   */
  export type WeeklySummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * The data used to update WeeklySummaries.
     */
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySummaries to update
     */
    where?: WeeklySummaryWhereInput
    /**
     * Limit how many WeeklySummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklySummary upsert
   */
  export type WeeklySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklySummary to update in case it exists.
     */
    where: WeeklySummaryWhereUniqueInput
    /**
     * In case the WeeklySummary found by the `where` argument doesn't exist, create a new WeeklySummary with this data.
     */
    create: XOR<WeeklySummaryCreateInput, WeeklySummaryUncheckedCreateInput>
    /**
     * In case the WeeklySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklySummaryUpdateInput, WeeklySummaryUncheckedUpdateInput>
  }

  /**
   * WeeklySummary delete
   */
  export type WeeklySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
    /**
     * Filter which WeeklySummary to delete.
     */
    where: WeeklySummaryWhereUniqueInput
  }

  /**
   * WeeklySummary deleteMany
   */
  export type WeeklySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySummaries to delete
     */
    where?: WeeklySummaryWhereInput
    /**
     * Limit how many WeeklySummaries to delete.
     */
    limit?: number
  }

  /**
   * WeeklySummary without action
   */
  export type WeeklySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySummary
     */
    select?: WeeklySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySummary
     */
    omit?: WeeklySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySummaryInclude<ExtArgs> | null
  }


  /**
   * Model Friends
   */

  export type AggregateFriends = {
    _count: FriendsCountAggregateOutputType | null
    _avg: FriendsAvgAggregateOutputType | null
    _sum: FriendsSumAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  export type FriendsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    friend_id: number | null
  }

  export type FriendsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    friend_id: number | null
  }

  export type FriendsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    friend_id: number | null
    status: string | null
  }

  export type FriendsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    friend_id: number | null
    status: string | null
  }

  export type FriendsCountAggregateOutputType = {
    id: number
    user_id: number
    friend_id: number
    status: number
    _all: number
  }


  export type FriendsAvgAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
  }

  export type FriendsSumAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
  }

  export type FriendsMinAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
    status?: true
  }

  export type FriendsMaxAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
    status?: true
  }

  export type FriendsCountAggregateInputType = {
    id?: true
    user_id?: true
    friend_id?: true
    status?: true
    _all?: true
  }

  export type FriendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to aggregate.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsMaxAggregateInputType
  }

  export type GetFriendsAggregateType<T extends FriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends[P]>
      : GetScalarType<T[P], AggregateFriends[P]>
  }




  export type FriendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsWhereInput
    orderBy?: FriendsOrderByWithAggregationInput | FriendsOrderByWithAggregationInput[]
    by: FriendsScalarFieldEnum[] | FriendsScalarFieldEnum
    having?: FriendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsCountAggregateInputType | true
    _avg?: FriendsAvgAggregateInputType
    _sum?: FriendsSumAggregateInputType
    _min?: FriendsMinAggregateInputType
    _max?: FriendsMaxAggregateInputType
  }

  export type FriendsGroupByOutputType = {
    id: number
    user_id: number
    friend_id: number
    status: string
    _count: FriendsCountAggregateOutputType | null
    _avg: FriendsAvgAggregateOutputType | null
    _sum: FriendsSumAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  type GetFriendsGroupByPayload<T extends FriendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupByOutputType[P]>
        }
      >
    >


  export type FriendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    friend_id?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type FriendsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    friend_id?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type FriendsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    friend_id?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type FriendsSelectScalar = {
    id?: boolean
    user_id?: boolean
    friend_id?: boolean
    status?: boolean
  }

  export type FriendsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "friend_id" | "status", ExtArgs["result"]["friends"]>
  export type FriendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friends"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      friend_id: number
      status: string
    }, ExtArgs["result"]["friends"]>
    composites: {}
  }

  type FriendsGetPayload<S extends boolean | null | undefined | FriendsDefaultArgs> = $Result.GetResult<Prisma.$FriendsPayload, S>

  type FriendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendsCountAggregateInputType | true
    }

  export interface FriendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friends'], meta: { name: 'Friends' } }
    /**
     * Find zero or one Friends that matches the filter.
     * @param {FriendsFindUniqueArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendsFindUniqueArgs>(args: SelectSubset<T, FriendsFindUniqueArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friends that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendsFindUniqueOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendsFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsFindFirstArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendsFindFirstArgs>(args?: SelectSubset<T, FriendsFindFirstArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsFindFirstOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendsFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friends.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friends.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendsWithIdOnly = await prisma.friends.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendsFindManyArgs>(args?: SelectSubset<T, FriendsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friends.
     * @param {FriendsCreateArgs} args - Arguments to create a Friends.
     * @example
     * // Create one Friends
     * const Friends = await prisma.friends.create({
     *   data: {
     *     // ... data to create a Friends
     *   }
     * })
     * 
     */
    create<T extends FriendsCreateArgs>(args: SelectSubset<T, FriendsCreateArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendsCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendsCreateManyArgs>(args?: SelectSubset<T, FriendsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {FriendsCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `id`
     * const friendsWithIdOnly = await prisma.friends.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendsCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friends.
     * @param {FriendsDeleteArgs} args - Arguments to delete one Friends.
     * @example
     * // Delete one Friends
     * const Friends = await prisma.friends.delete({
     *   where: {
     *     // ... filter to delete one Friends
     *   }
     * })
     * 
     */
    delete<T extends FriendsDeleteArgs>(args: SelectSubset<T, FriendsDeleteArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friends.
     * @param {FriendsUpdateArgs} args - Arguments to update one Friends.
     * @example
     * // Update one Friends
     * const friends = await prisma.friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendsUpdateArgs>(args: SelectSubset<T, FriendsUpdateArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendsDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendsDeleteManyArgs>(args?: SelectSubset<T, FriendsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendsUpdateManyArgs>(args: SelectSubset<T, FriendsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {FriendsUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `id`
     * const friendsWithIdOnly = await prisma.friends.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FriendsUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friends.
     * @param {FriendsUpsertArgs} args - Arguments to update or create a Friends.
     * @example
     * // Update or create a Friends
     * const friends = await prisma.friends.upsert({
     *   create: {
     *     // ... data to create a Friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends we want to update
     *   }
     * })
     */
    upsert<T extends FriendsUpsertArgs>(args: SelectSubset<T, FriendsUpsertArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friends.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendsCountArgs>(
      args?: Subset<T, FriendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendsAggregateArgs>(args: Subset<T, FriendsAggregateArgs>): Prisma.PrismaPromise<GetFriendsAggregateType<T>>

    /**
     * Group by Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupByArgs} args - Group by arguments.
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
      T extends FriendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendsGroupByArgs['orderBy'] }
        : { orderBy?: FriendsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friends model
   */
  readonly fields: FriendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Friends model
   */
  interface FriendsFieldRefs {
    readonly id: FieldRef<"Friends", 'Int'>
    readonly user_id: FieldRef<"Friends", 'Int'>
    readonly friend_id: FieldRef<"Friends", 'Int'>
    readonly status: FieldRef<"Friends", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Friends findUnique
   */
  export type FriendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends findUniqueOrThrow
   */
  export type FriendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends findFirst
   */
  export type FriendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * Friends findFirstOrThrow
   */
  export type FriendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * Friends findMany
   */
  export type FriendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * Friends create
   */
  export type FriendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * The data needed to create a Friends.
     */
    data: XOR<FriendsCreateInput, FriendsUncheckedCreateInput>
  }

  /**
   * Friends createMany
   */
  export type FriendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendsCreateManyInput | FriendsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friends createManyAndReturn
   */
  export type FriendsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * The data used to create many Friends.
     */
    data: FriendsCreateManyInput | FriendsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friends update
   */
  export type FriendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * The data needed to update a Friends.
     */
    data: XOR<FriendsUpdateInput, FriendsUncheckedUpdateInput>
    /**
     * Choose, which Friends to update.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends updateMany
   */
  export type FriendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendsWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friends updateManyAndReturn
   */
  export type FriendsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendsWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friends upsert
   */
  export type FriendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * The filter to search for the Friends to update in case it exists.
     */
    where: FriendsWhereUniqueInput
    /**
     * In case the Friends found by the `where` argument doesn't exist, create a new Friends with this data.
     */
    create: XOR<FriendsCreateInput, FriendsUncheckedCreateInput>
    /**
     * In case the Friends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendsUpdateInput, FriendsUncheckedUpdateInput>
  }

  /**
   * Friends delete
   */
  export type FriendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter which Friends to delete.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends deleteMany
   */
  export type FriendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendsWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friends without action
   */
  export type FriendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    phone: 'phone',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TodayActivityScalarFieldEnum: {
    id: 'id',
    date: 'date',
    steps: 'steps',
    sleep_hours: 'sleep_hours',
    calories: 'calories',
    water_glasses: 'water_glasses',
    user_id: 'user_id'
  };

  export type TodayActivityScalarFieldEnum = (typeof TodayActivityScalarFieldEnum)[keyof typeof TodayActivityScalarFieldEnum]


  export const WeeklySummaryScalarFieldEnum: {
    id: 'id',
    week_start_date: 'week_start_date',
    avg_steps: 'avg_steps',
    avg_sleep: 'avg_sleep',
    avg_water: 'avg_water',
    avg_calories: 'avg_calories',
    score_steps: 'score_steps',
    score_sleep: 'score_sleep',
    score_water: 'score_water',
    score_calories: 'score_calories',
    user_id: 'user_id'
  };

  export type WeeklySummaryScalarFieldEnum = (typeof WeeklySummaryScalarFieldEnum)[keyof typeof WeeklySummaryScalarFieldEnum]


  export const FriendsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    friend_id: 'friend_id',
    status: 'status'
  };

  export type FriendsScalarFieldEnum = (typeof FriendsScalarFieldEnum)[keyof typeof FriendsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    todayActivities?: TodayActivityListRelationFilter
    weeklySummaries?: WeeklySummaryListRelationFilter
    friends?: FriendsListRelationFilter
    friendOf?: FriendsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    todayActivities?: TodayActivityOrderByRelationAggregateInput
    weeklySummaries?: WeeklySummaryOrderByRelationAggregateInput
    friends?: FriendsOrderByRelationAggregateInput
    friendOf?: FriendsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    todayActivities?: TodayActivityListRelationFilter
    weeklySummaries?: WeeklySummaryListRelationFilter
    friends?: FriendsListRelationFilter
    friendOf?: FriendsListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type TodayActivityWhereInput = {
    AND?: TodayActivityWhereInput | TodayActivityWhereInput[]
    OR?: TodayActivityWhereInput[]
    NOT?: TodayActivityWhereInput | TodayActivityWhereInput[]
    id?: IntFilter<"TodayActivity"> | number
    date?: DateTimeFilter<"TodayActivity"> | Date | string
    steps?: IntFilter<"TodayActivity"> | number
    sleep_hours?: FloatFilter<"TodayActivity"> | number
    calories?: IntFilter<"TodayActivity"> | number
    water_glasses?: IntFilter<"TodayActivity"> | number
    user_id?: IntFilter<"TodayActivity"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TodayActivityOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    steps?: SortOrder
    sleep_hours?: SortOrder
    calories?: SortOrder
    water_glasses?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TodayActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TodayActivityWhereInput | TodayActivityWhereInput[]
    OR?: TodayActivityWhereInput[]
    NOT?: TodayActivityWhereInput | TodayActivityWhereInput[]
    date?: DateTimeFilter<"TodayActivity"> | Date | string
    steps?: IntFilter<"TodayActivity"> | number
    sleep_hours?: FloatFilter<"TodayActivity"> | number
    calories?: IntFilter<"TodayActivity"> | number
    water_glasses?: IntFilter<"TodayActivity"> | number
    user_id?: IntFilter<"TodayActivity"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TodayActivityOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    steps?: SortOrder
    sleep_hours?: SortOrder
    calories?: SortOrder
    water_glasses?: SortOrder
    user_id?: SortOrder
    _count?: TodayActivityCountOrderByAggregateInput
    _avg?: TodayActivityAvgOrderByAggregateInput
    _max?: TodayActivityMaxOrderByAggregateInput
    _min?: TodayActivityMinOrderByAggregateInput
    _sum?: TodayActivitySumOrderByAggregateInput
  }

  export type TodayActivityScalarWhereWithAggregatesInput = {
    AND?: TodayActivityScalarWhereWithAggregatesInput | TodayActivityScalarWhereWithAggregatesInput[]
    OR?: TodayActivityScalarWhereWithAggregatesInput[]
    NOT?: TodayActivityScalarWhereWithAggregatesInput | TodayActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TodayActivity"> | number
    date?: DateTimeWithAggregatesFilter<"TodayActivity"> | Date | string
    steps?: IntWithAggregatesFilter<"TodayActivity"> | number
    sleep_hours?: FloatWithAggregatesFilter<"TodayActivity"> | number
    calories?: IntWithAggregatesFilter<"TodayActivity"> | number
    water_glasses?: IntWithAggregatesFilter<"TodayActivity"> | number
    user_id?: IntWithAggregatesFilter<"TodayActivity"> | number
  }

  export type WeeklySummaryWhereInput = {
    AND?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    OR?: WeeklySummaryWhereInput[]
    NOT?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    id?: IntFilter<"WeeklySummary"> | number
    week_start_date?: DateTimeFilter<"WeeklySummary"> | Date | string
    avg_steps?: FloatFilter<"WeeklySummary"> | number
    avg_sleep?: FloatFilter<"WeeklySummary"> | number
    avg_water?: FloatFilter<"WeeklySummary"> | number
    avg_calories?: FloatFilter<"WeeklySummary"> | number
    score_steps?: IntFilter<"WeeklySummary"> | number
    score_sleep?: IntFilter<"WeeklySummary"> | number
    score_water?: IntFilter<"WeeklySummary"> | number
    score_calories?: IntFilter<"WeeklySummary"> | number
    user_id?: IntFilter<"WeeklySummary"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeeklySummaryOrderByWithRelationInput = {
    id?: SortOrder
    week_start_date?: SortOrder
    avg_steps?: SortOrder
    avg_sleep?: SortOrder
    avg_water?: SortOrder
    avg_calories?: SortOrder
    score_steps?: SortOrder
    score_sleep?: SortOrder
    score_water?: SortOrder
    score_calories?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeeklySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    OR?: WeeklySummaryWhereInput[]
    NOT?: WeeklySummaryWhereInput | WeeklySummaryWhereInput[]
    week_start_date?: DateTimeFilter<"WeeklySummary"> | Date | string
    avg_steps?: FloatFilter<"WeeklySummary"> | number
    avg_sleep?: FloatFilter<"WeeklySummary"> | number
    avg_water?: FloatFilter<"WeeklySummary"> | number
    avg_calories?: FloatFilter<"WeeklySummary"> | number
    score_steps?: IntFilter<"WeeklySummary"> | number
    score_sleep?: IntFilter<"WeeklySummary"> | number
    score_water?: IntFilter<"WeeklySummary"> | number
    score_calories?: IntFilter<"WeeklySummary"> | number
    user_id?: IntFilter<"WeeklySummary"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WeeklySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    week_start_date?: SortOrder
    avg_steps?: SortOrder
    avg_sleep?: SortOrder
    avg_water?: SortOrder
    avg_calories?: SortOrder
    score_steps?: SortOrder
    score_sleep?: SortOrder
    score_water?: SortOrder
    score_calories?: SortOrder
    user_id?: SortOrder
    _count?: WeeklySummaryCountOrderByAggregateInput
    _avg?: WeeklySummaryAvgOrderByAggregateInput
    _max?: WeeklySummaryMaxOrderByAggregateInput
    _min?: WeeklySummaryMinOrderByAggregateInput
    _sum?: WeeklySummarySumOrderByAggregateInput
  }

  export type WeeklySummaryScalarWhereWithAggregatesInput = {
    AND?: WeeklySummaryScalarWhereWithAggregatesInput | WeeklySummaryScalarWhereWithAggregatesInput[]
    OR?: WeeklySummaryScalarWhereWithAggregatesInput[]
    NOT?: WeeklySummaryScalarWhereWithAggregatesInput | WeeklySummaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeeklySummary"> | number
    week_start_date?: DateTimeWithAggregatesFilter<"WeeklySummary"> | Date | string
    avg_steps?: FloatWithAggregatesFilter<"WeeklySummary"> | number
    avg_sleep?: FloatWithAggregatesFilter<"WeeklySummary"> | number
    avg_water?: FloatWithAggregatesFilter<"WeeklySummary"> | number
    avg_calories?: FloatWithAggregatesFilter<"WeeklySummary"> | number
    score_steps?: IntWithAggregatesFilter<"WeeklySummary"> | number
    score_sleep?: IntWithAggregatesFilter<"WeeklySummary"> | number
    score_water?: IntWithAggregatesFilter<"WeeklySummary"> | number
    score_calories?: IntWithAggregatesFilter<"WeeklySummary"> | number
    user_id?: IntWithAggregatesFilter<"WeeklySummary"> | number
  }

  export type FriendsWhereInput = {
    AND?: FriendsWhereInput | FriendsWhereInput[]
    OR?: FriendsWhereInput[]
    NOT?: FriendsWhereInput | FriendsWhereInput[]
    id?: IntFilter<"Friends"> | number
    user_id?: IntFilter<"Friends"> | number
    friend_id?: IntFilter<"Friends"> | number
    status?: StringFilter<"Friends"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type FriendsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FriendsWhereInput | FriendsWhereInput[]
    OR?: FriendsWhereInput[]
    NOT?: FriendsWhereInput | FriendsWhereInput[]
    user_id?: IntFilter<"Friends"> | number
    friend_id?: IntFilter<"Friends"> | number
    status?: StringFilter<"Friends"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FriendsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
    _count?: FriendsCountOrderByAggregateInput
    _avg?: FriendsAvgOrderByAggregateInput
    _max?: FriendsMaxOrderByAggregateInput
    _min?: FriendsMinOrderByAggregateInput
    _sum?: FriendsSumOrderByAggregateInput
  }

  export type FriendsScalarWhereWithAggregatesInput = {
    AND?: FriendsScalarWhereWithAggregatesInput | FriendsScalarWhereWithAggregatesInput[]
    OR?: FriendsScalarWhereWithAggregatesInput[]
    NOT?: FriendsScalarWhereWithAggregatesInput | FriendsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Friends"> | number
    user_id?: IntWithAggregatesFilter<"Friends"> | number
    friend_id?: IntWithAggregatesFilter<"Friends"> | number
    status?: StringWithAggregatesFilter<"Friends"> | string
  }

  export type UserCreateInput = {
    name: string
    username: string
    phone: string
    email: string
    password: string
    todayActivities?: TodayActivityCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    phone: string
    email: string
    password: string
    todayActivities?: TodayActivityUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    todayActivities?: TodayActivityUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    todayActivities?: TodayActivityUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    username: string
    phone: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TodayActivityCreateInput = {
    date: Date | string
    steps: number
    sleep_hours: number
    calories: number
    water_glasses?: number
    user: UserCreateNestedOneWithoutTodayActivitiesInput
  }

  export type TodayActivityUncheckedCreateInput = {
    id?: number
    date: Date | string
    steps: number
    sleep_hours: number
    calories: number
    water_glasses?: number
    user_id: number
  }

  export type TodayActivityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: IntFieldUpdateOperationsInput | number
    sleep_hours?: FloatFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    water_glasses?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTodayActivitiesNestedInput
  }

  export type TodayActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: IntFieldUpdateOperationsInput | number
    sleep_hours?: FloatFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    water_glasses?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TodayActivityCreateManyInput = {
    id?: number
    date: Date | string
    steps: number
    sleep_hours: number
    calories: number
    water_glasses?: number
    user_id: number
  }

  export type TodayActivityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: IntFieldUpdateOperationsInput | number
    sleep_hours?: FloatFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    water_glasses?: IntFieldUpdateOperationsInput | number
  }

  export type TodayActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: IntFieldUpdateOperationsInput | number
    sleep_hours?: FloatFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    water_glasses?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklySummaryCreateInput = {
    week_start_date: Date | string
    avg_steps: number
    avg_sleep: number
    avg_water: number
    avg_calories: number
    score_steps: number
    score_sleep: number
    score_water: number
    score_calories: number
    user: UserCreateNestedOneWithoutWeeklySummariesInput
  }

  export type WeeklySummaryUncheckedCreateInput = {
    id?: number
    week_start_date: Date | string
    avg_steps: number
    avg_sleep: number
    avg_water: number
    avg_calories: number
    score_steps: number
    score_sleep: number
    score_water: number
    score_calories: number
    user_id: number
  }

  export type WeeklySummaryUpdateInput = {
    week_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_steps?: FloatFieldUpdateOperationsInput | number
    avg_sleep?: FloatFieldUpdateOperationsInput | number
    avg_water?: FloatFieldUpdateOperationsInput | number
    avg_calories?: FloatFieldUpdateOperationsInput | number
    score_steps?: IntFieldUpdateOperationsInput | number
    score_sleep?: IntFieldUpdateOperationsInput | number
    score_water?: IntFieldUpdateOperationsInput | number
    score_calories?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWeeklySummariesNestedInput
  }

  export type WeeklySummaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_steps?: FloatFieldUpdateOperationsInput | number
    avg_sleep?: FloatFieldUpdateOperationsInput | number
    avg_water?: FloatFieldUpdateOperationsInput | number
    avg_calories?: FloatFieldUpdateOperationsInput | number
    score_steps?: IntFieldUpdateOperationsInput | number
    score_sleep?: IntFieldUpdateOperationsInput | number
    score_water?: IntFieldUpdateOperationsInput | number
    score_calories?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklySummaryCreateManyInput = {
    id?: number
    week_start_date: Date | string
    avg_steps: number
    avg_sleep: number
    avg_water: number
    avg_calories: number
    score_steps: number
    score_sleep: number
    score_water: number
    score_calories: number
    user_id: number
  }

  export type WeeklySummaryUpdateManyMutationInput = {
    week_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_steps?: FloatFieldUpdateOperationsInput | number
    avg_sleep?: FloatFieldUpdateOperationsInput | number
    avg_water?: FloatFieldUpdateOperationsInput | number
    avg_calories?: FloatFieldUpdateOperationsInput | number
    score_steps?: IntFieldUpdateOperationsInput | number
    score_sleep?: IntFieldUpdateOperationsInput | number
    score_water?: IntFieldUpdateOperationsInput | number
    score_calories?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklySummaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_steps?: FloatFieldUpdateOperationsInput | number
    avg_sleep?: FloatFieldUpdateOperationsInput | number
    avg_water?: FloatFieldUpdateOperationsInput | number
    avg_calories?: FloatFieldUpdateOperationsInput | number
    score_steps?: IntFieldUpdateOperationsInput | number
    score_sleep?: IntFieldUpdateOperationsInput | number
    score_water?: IntFieldUpdateOperationsInput | number
    score_calories?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FriendsCreateInput = {
    status: string
    user: UserCreateNestedOneWithoutFriendsInput
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendsUncheckedCreateInput = {
    id?: number
    user_id: number
    friend_id: number
    status: string
  }

  export type FriendsUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    friend_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FriendsCreateManyInput = {
    id?: number
    user_id: number
    friend_id: number
    status: string
  }

  export type FriendsUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FriendsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    friend_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
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

  export type TodayActivityListRelationFilter = {
    every?: TodayActivityWhereInput
    some?: TodayActivityWhereInput
    none?: TodayActivityWhereInput
  }

  export type WeeklySummaryListRelationFilter = {
    every?: WeeklySummaryWhereInput
    some?: WeeklySummaryWhereInput
    none?: WeeklySummaryWhereInput
  }

  export type FriendsListRelationFilter = {
    every?: FriendsWhereInput
    some?: FriendsWhereInput
    none?: FriendsWhereInput
  }

  export type TodayActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklySummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TodayActivityCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    steps?: SortOrder
    sleep_hours?: SortOrder
    calories?: SortOrder
    water_glasses?: SortOrder
    user_id?: SortOrder
  }

  export type TodayActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    steps?: SortOrder
    sleep_hours?: SortOrder
    calories?: SortOrder
    water_glasses?: SortOrder
    user_id?: SortOrder
  }

  export type TodayActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    steps?: SortOrder
    sleep_hours?: SortOrder
    calories?: SortOrder
    water_glasses?: SortOrder
    user_id?: SortOrder
  }

  export type TodayActivityMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    steps?: SortOrder
    sleep_hours?: SortOrder
    calories?: SortOrder
    water_glasses?: SortOrder
    user_id?: SortOrder
  }

  export type TodayActivitySumOrderByAggregateInput = {
    id?: SortOrder
    steps?: SortOrder
    sleep_hours?: SortOrder
    calories?: SortOrder
    water_glasses?: SortOrder
    user_id?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type WeeklySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    week_start_date?: SortOrder
    avg_steps?: SortOrder
    avg_sleep?: SortOrder
    avg_water?: SortOrder
    avg_calories?: SortOrder
    score_steps?: SortOrder
    score_sleep?: SortOrder
    score_water?: SortOrder
    score_calories?: SortOrder
    user_id?: SortOrder
  }

  export type WeeklySummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    avg_steps?: SortOrder
    avg_sleep?: SortOrder
    avg_water?: SortOrder
    avg_calories?: SortOrder
    score_steps?: SortOrder
    score_sleep?: SortOrder
    score_water?: SortOrder
    score_calories?: SortOrder
    user_id?: SortOrder
  }

  export type WeeklySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    week_start_date?: SortOrder
    avg_steps?: SortOrder
    avg_sleep?: SortOrder
    avg_water?: SortOrder
    avg_calories?: SortOrder
    score_steps?: SortOrder
    score_sleep?: SortOrder
    score_water?: SortOrder
    score_calories?: SortOrder
    user_id?: SortOrder
  }

  export type WeeklySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    week_start_date?: SortOrder
    avg_steps?: SortOrder
    avg_sleep?: SortOrder
    avg_water?: SortOrder
    avg_calories?: SortOrder
    score_steps?: SortOrder
    score_sleep?: SortOrder
    score_water?: SortOrder
    score_calories?: SortOrder
    user_id?: SortOrder
  }

  export type WeeklySummarySumOrderByAggregateInput = {
    id?: SortOrder
    avg_steps?: SortOrder
    avg_sleep?: SortOrder
    avg_water?: SortOrder
    avg_calories?: SortOrder
    score_steps?: SortOrder
    score_sleep?: SortOrder
    score_water?: SortOrder
    score_calories?: SortOrder
    user_id?: SortOrder
  }

  export type FriendsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
  }

  export type FriendsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
  }

  export type FriendsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
  }

  export type FriendsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
    status?: SortOrder
  }

  export type FriendsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friend_id?: SortOrder
  }

  export type TodayActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<TodayActivityCreateWithoutUserInput, TodayActivityUncheckedCreateWithoutUserInput> | TodayActivityCreateWithoutUserInput[] | TodayActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodayActivityCreateOrConnectWithoutUserInput | TodayActivityCreateOrConnectWithoutUserInput[]
    createMany?: TodayActivityCreateManyUserInputEnvelope
    connect?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
  }

  export type WeeklySummaryCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type FriendsCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type FriendsCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput> | FriendsCreateWithoutFriendInput[] | FriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutFriendInput | FriendsCreateOrConnectWithoutFriendInput[]
    createMany?: FriendsCreateManyFriendInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type TodayActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TodayActivityCreateWithoutUserInput, TodayActivityUncheckedCreateWithoutUserInput> | TodayActivityCreateWithoutUserInput[] | TodayActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodayActivityCreateOrConnectWithoutUserInput | TodayActivityCreateOrConnectWithoutUserInput[]
    createMany?: TodayActivityCreateManyUserInputEnvelope
    connect?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
  }

  export type WeeklySummaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
  }

  export type FriendsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type FriendsUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput> | FriendsCreateWithoutFriendInput[] | FriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutFriendInput | FriendsCreateOrConnectWithoutFriendInput[]
    createMany?: FriendsCreateManyFriendInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TodayActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodayActivityCreateWithoutUserInput, TodayActivityUncheckedCreateWithoutUserInput> | TodayActivityCreateWithoutUserInput[] | TodayActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodayActivityCreateOrConnectWithoutUserInput | TodayActivityCreateOrConnectWithoutUserInput[]
    upsert?: TodayActivityUpsertWithWhereUniqueWithoutUserInput | TodayActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodayActivityCreateManyUserInputEnvelope
    set?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
    disconnect?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
    delete?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
    connect?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
    update?: TodayActivityUpdateWithWhereUniqueWithoutUserInput | TodayActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodayActivityUpdateManyWithWhereWithoutUserInput | TodayActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodayActivityScalarWhereInput | TodayActivityScalarWhereInput[]
  }

  export type WeeklySummaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutUserInput | WeeklySummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutUserInput | WeeklySummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutUserInput | WeeklySummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type FriendsUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutUserInput | FriendsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutUserInput | FriendsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutUserInput | FriendsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type FriendsUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput> | FriendsCreateWithoutFriendInput[] | FriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutFriendInput | FriendsCreateOrConnectWithoutFriendInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutFriendInput | FriendsUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendsCreateManyFriendInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutFriendInput | FriendsUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutFriendInput | FriendsUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TodayActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodayActivityCreateWithoutUserInput, TodayActivityUncheckedCreateWithoutUserInput> | TodayActivityCreateWithoutUserInput[] | TodayActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodayActivityCreateOrConnectWithoutUserInput | TodayActivityCreateOrConnectWithoutUserInput[]
    upsert?: TodayActivityUpsertWithWhereUniqueWithoutUserInput | TodayActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodayActivityCreateManyUserInputEnvelope
    set?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
    disconnect?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
    delete?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
    connect?: TodayActivityWhereUniqueInput | TodayActivityWhereUniqueInput[]
    update?: TodayActivityUpdateWithWhereUniqueWithoutUserInput | TodayActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodayActivityUpdateManyWithWhereWithoutUserInput | TodayActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodayActivityScalarWhereInput | TodayActivityScalarWhereInput[]
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput> | WeeklySummaryCreateWithoutUserInput[] | WeeklySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklySummaryCreateOrConnectWithoutUserInput | WeeklySummaryCreateOrConnectWithoutUserInput[]
    upsert?: WeeklySummaryUpsertWithWhereUniqueWithoutUserInput | WeeklySummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklySummaryCreateManyUserInputEnvelope
    set?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    disconnect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    delete?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    connect?: WeeklySummaryWhereUniqueInput | WeeklySummaryWhereUniqueInput[]
    update?: WeeklySummaryUpdateWithWhereUniqueWithoutUserInput | WeeklySummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklySummaryUpdateManyWithWhereWithoutUserInput | WeeklySummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
  }

  export type FriendsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutUserInput | FriendsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutUserInput | FriendsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutUserInput | FriendsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type FriendsUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput> | FriendsCreateWithoutFriendInput[] | FriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutFriendInput | FriendsCreateOrConnectWithoutFriendInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutFriendInput | FriendsUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendsCreateManyFriendInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutFriendInput | FriendsUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutFriendInput | FriendsUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTodayActivitiesInput = {
    create?: XOR<UserCreateWithoutTodayActivitiesInput, UserUncheckedCreateWithoutTodayActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodayActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTodayActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutTodayActivitiesInput, UserUncheckedCreateWithoutTodayActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodayActivitiesInput
    upsert?: UserUpsertWithoutTodayActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodayActivitiesInput, UserUpdateWithoutTodayActivitiesInput>, UserUncheckedUpdateWithoutTodayActivitiesInput>
  }

  export type UserCreateNestedOneWithoutWeeklySummariesInput = {
    create?: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklySummariesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWeeklySummariesNestedInput = {
    create?: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklySummariesInput
    upsert?: UserUpsertWithoutWeeklySummariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklySummariesInput, UserUpdateWithoutWeeklySummariesInput>, UserUncheckedUpdateWithoutWeeklySummariesInput>
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendOfInput, UserUpdateWithoutFriendOfInput>, UserUncheckedUpdateWithoutFriendOfInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TodayActivityCreateWithoutUserInput = {
    date: Date | string
    steps: number
    sleep_hours: number
    calories: number
    water_glasses?: number
  }

  export type TodayActivityUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    steps: number
    sleep_hours: number
    calories: number
    water_glasses?: number
  }

  export type TodayActivityCreateOrConnectWithoutUserInput = {
    where: TodayActivityWhereUniqueInput
    create: XOR<TodayActivityCreateWithoutUserInput, TodayActivityUncheckedCreateWithoutUserInput>
  }

  export type TodayActivityCreateManyUserInputEnvelope = {
    data: TodayActivityCreateManyUserInput | TodayActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeeklySummaryCreateWithoutUserInput = {
    week_start_date: Date | string
    avg_steps: number
    avg_sleep: number
    avg_water: number
    avg_calories: number
    score_steps: number
    score_sleep: number
    score_water: number
    score_calories: number
  }

  export type WeeklySummaryUncheckedCreateWithoutUserInput = {
    id?: number
    week_start_date: Date | string
    avg_steps: number
    avg_sleep: number
    avg_water: number
    avg_calories: number
    score_steps: number
    score_sleep: number
    score_water: number
    score_calories: number
  }

  export type WeeklySummaryCreateOrConnectWithoutUserInput = {
    where: WeeklySummaryWhereUniqueInput
    create: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput>
  }

  export type WeeklySummaryCreateManyUserInputEnvelope = {
    data: WeeklySummaryCreateManyUserInput | WeeklySummaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendsCreateWithoutUserInput = {
    status: string
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendsUncheckedCreateWithoutUserInput = {
    id?: number
    friend_id: number
    status: string
  }

  export type FriendsCreateOrConnectWithoutUserInput = {
    where: FriendsWhereUniqueInput
    create: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput>
  }

  export type FriendsCreateManyUserInputEnvelope = {
    data: FriendsCreateManyUserInput | FriendsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendsCreateWithoutFriendInput = {
    status: string
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendsUncheckedCreateWithoutFriendInput = {
    id?: number
    user_id: number
    status: string
  }

  export type FriendsCreateOrConnectWithoutFriendInput = {
    where: FriendsWhereUniqueInput
    create: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput>
  }

  export type FriendsCreateManyFriendInputEnvelope = {
    data: FriendsCreateManyFriendInput | FriendsCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type TodayActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: TodayActivityWhereUniqueInput
    update: XOR<TodayActivityUpdateWithoutUserInput, TodayActivityUncheckedUpdateWithoutUserInput>
    create: XOR<TodayActivityCreateWithoutUserInput, TodayActivityUncheckedCreateWithoutUserInput>
  }

  export type TodayActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: TodayActivityWhereUniqueInput
    data: XOR<TodayActivityUpdateWithoutUserInput, TodayActivityUncheckedUpdateWithoutUserInput>
  }

  export type TodayActivityUpdateManyWithWhereWithoutUserInput = {
    where: TodayActivityScalarWhereInput
    data: XOR<TodayActivityUpdateManyMutationInput, TodayActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type TodayActivityScalarWhereInput = {
    AND?: TodayActivityScalarWhereInput | TodayActivityScalarWhereInput[]
    OR?: TodayActivityScalarWhereInput[]
    NOT?: TodayActivityScalarWhereInput | TodayActivityScalarWhereInput[]
    id?: IntFilter<"TodayActivity"> | number
    date?: DateTimeFilter<"TodayActivity"> | Date | string
    steps?: IntFilter<"TodayActivity"> | number
    sleep_hours?: FloatFilter<"TodayActivity"> | number
    calories?: IntFilter<"TodayActivity"> | number
    water_glasses?: IntFilter<"TodayActivity"> | number
    user_id?: IntFilter<"TodayActivity"> | number
  }

  export type WeeklySummaryUpsertWithWhereUniqueWithoutUserInput = {
    where: WeeklySummaryWhereUniqueInput
    update: XOR<WeeklySummaryUpdateWithoutUserInput, WeeklySummaryUncheckedUpdateWithoutUserInput>
    create: XOR<WeeklySummaryCreateWithoutUserInput, WeeklySummaryUncheckedCreateWithoutUserInput>
  }

  export type WeeklySummaryUpdateWithWhereUniqueWithoutUserInput = {
    where: WeeklySummaryWhereUniqueInput
    data: XOR<WeeklySummaryUpdateWithoutUserInput, WeeklySummaryUncheckedUpdateWithoutUserInput>
  }

  export type WeeklySummaryUpdateManyWithWhereWithoutUserInput = {
    where: WeeklySummaryScalarWhereInput
    data: XOR<WeeklySummaryUpdateManyMutationInput, WeeklySummaryUncheckedUpdateManyWithoutUserInput>
  }

  export type WeeklySummaryScalarWhereInput = {
    AND?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
    OR?: WeeklySummaryScalarWhereInput[]
    NOT?: WeeklySummaryScalarWhereInput | WeeklySummaryScalarWhereInput[]
    id?: IntFilter<"WeeklySummary"> | number
    week_start_date?: DateTimeFilter<"WeeklySummary"> | Date | string
    avg_steps?: FloatFilter<"WeeklySummary"> | number
    avg_sleep?: FloatFilter<"WeeklySummary"> | number
    avg_water?: FloatFilter<"WeeklySummary"> | number
    avg_calories?: FloatFilter<"WeeklySummary"> | number
    score_steps?: IntFilter<"WeeklySummary"> | number
    score_sleep?: IntFilter<"WeeklySummary"> | number
    score_water?: IntFilter<"WeeklySummary"> | number
    score_calories?: IntFilter<"WeeklySummary"> | number
    user_id?: IntFilter<"WeeklySummary"> | number
  }

  export type FriendsUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendsWhereUniqueInput
    update: XOR<FriendsUpdateWithoutUserInput, FriendsUncheckedUpdateWithoutUserInput>
    create: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput>
  }

  export type FriendsUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendsWhereUniqueInput
    data: XOR<FriendsUpdateWithoutUserInput, FriendsUncheckedUpdateWithoutUserInput>
  }

  export type FriendsUpdateManyWithWhereWithoutUserInput = {
    where: FriendsScalarWhereInput
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendsScalarWhereInput = {
    AND?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
    OR?: FriendsScalarWhereInput[]
    NOT?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
    id?: IntFilter<"Friends"> | number
    user_id?: IntFilter<"Friends"> | number
    friend_id?: IntFilter<"Friends"> | number
    status?: StringFilter<"Friends"> | string
  }

  export type FriendsUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendsWhereUniqueInput
    update: XOR<FriendsUpdateWithoutFriendInput, FriendsUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendsCreateWithoutFriendInput, FriendsUncheckedCreateWithoutFriendInput>
  }

  export type FriendsUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendsWhereUniqueInput
    data: XOR<FriendsUpdateWithoutFriendInput, FriendsUncheckedUpdateWithoutFriendInput>
  }

  export type FriendsUpdateManyWithWhereWithoutFriendInput = {
    where: FriendsScalarWhereInput
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyWithoutFriendInput>
  }

  export type UserCreateWithoutTodayActivitiesInput = {
    name: string
    username: string
    phone: string
    email: string
    password: string
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutTodayActivitiesInput = {
    id?: number
    name: string
    username: string
    phone: string
    email: string
    password: string
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutTodayActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodayActivitiesInput, UserUncheckedCreateWithoutTodayActivitiesInput>
  }

  export type UserUpsertWithoutTodayActivitiesInput = {
    update: XOR<UserUpdateWithoutTodayActivitiesInput, UserUncheckedUpdateWithoutTodayActivitiesInput>
    create: XOR<UserCreateWithoutTodayActivitiesInput, UserUncheckedCreateWithoutTodayActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodayActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodayActivitiesInput, UserUncheckedUpdateWithoutTodayActivitiesInput>
  }

  export type UserUpdateWithoutTodayActivitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutTodayActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateWithoutWeeklySummariesInput = {
    name: string
    username: string
    phone: string
    email: string
    password: string
    todayActivities?: TodayActivityCreateNestedManyWithoutUserInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutWeeklySummariesInput = {
    id?: number
    name: string
    username: string
    phone: string
    email: string
    password: string
    todayActivities?: TodayActivityUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutWeeklySummariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
  }

  export type UserUpsertWithoutWeeklySummariesInput = {
    update: XOR<UserUpdateWithoutWeeklySummariesInput, UserUncheckedUpdateWithoutWeeklySummariesInput>
    create: XOR<UserCreateWithoutWeeklySummariesInput, UserUncheckedCreateWithoutWeeklySummariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklySummariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklySummariesInput, UserUncheckedUpdateWithoutWeeklySummariesInput>
  }

  export type UserUpdateWithoutWeeklySummariesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    todayActivities?: TodayActivityUpdateManyWithoutUserNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklySummariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    todayActivities?: TodayActivityUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateWithoutFriendsInput = {
    name: string
    username: string
    phone: string
    email: string
    password: string
    todayActivities?: TodayActivityCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    friendOf?: FriendsCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: number
    name: string
    username: string
    phone: string
    email: string
    password: string
    todayActivities?: TodayActivityUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendsUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutFriendOfInput = {
    name: string
    username: string
    phone: string
    email: string
    password: string
    todayActivities?: TodayActivityCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryCreateNestedManyWithoutUserInput
    friends?: FriendsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: number
    name: string
    username: string
    phone: string
    email: string
    password: string
    todayActivities?: TodayActivityUncheckedCreateNestedManyWithoutUserInput
    weeklySummaries?: WeeklySummaryUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    todayActivities?: TodayActivityUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    todayActivities?: TodayActivityUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendsUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    todayActivities?: TodayActivityUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUpdateManyWithoutUserNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    todayActivities?: TodayActivityUncheckedUpdateManyWithoutUserNestedInput
    weeklySummaries?: WeeklySummaryUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TodayActivityCreateManyUserInput = {
    id?: number
    date: Date | string
    steps: number
    sleep_hours: number
    calories: number
    water_glasses?: number
  }

  export type WeeklySummaryCreateManyUserInput = {
    id?: number
    week_start_date: Date | string
    avg_steps: number
    avg_sleep: number
    avg_water: number
    avg_calories: number
    score_steps: number
    score_sleep: number
    score_water: number
    score_calories: number
  }

  export type FriendsCreateManyUserInput = {
    id?: number
    friend_id: number
    status: string
  }

  export type FriendsCreateManyFriendInput = {
    id?: number
    user_id: number
    status: string
  }

  export type TodayActivityUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: IntFieldUpdateOperationsInput | number
    sleep_hours?: FloatFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    water_glasses?: IntFieldUpdateOperationsInput | number
  }

  export type TodayActivityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: IntFieldUpdateOperationsInput | number
    sleep_hours?: FloatFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    water_glasses?: IntFieldUpdateOperationsInput | number
  }

  export type TodayActivityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: IntFieldUpdateOperationsInput | number
    sleep_hours?: FloatFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    water_glasses?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklySummaryUpdateWithoutUserInput = {
    week_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_steps?: FloatFieldUpdateOperationsInput | number
    avg_sleep?: FloatFieldUpdateOperationsInput | number
    avg_water?: FloatFieldUpdateOperationsInput | number
    avg_calories?: FloatFieldUpdateOperationsInput | number
    score_steps?: IntFieldUpdateOperationsInput | number
    score_sleep?: IntFieldUpdateOperationsInput | number
    score_water?: IntFieldUpdateOperationsInput | number
    score_calories?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklySummaryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_steps?: FloatFieldUpdateOperationsInput | number
    avg_sleep?: FloatFieldUpdateOperationsInput | number
    avg_water?: FloatFieldUpdateOperationsInput | number
    avg_calories?: FloatFieldUpdateOperationsInput | number
    score_steps?: IntFieldUpdateOperationsInput | number
    score_sleep?: IntFieldUpdateOperationsInput | number
    score_water?: IntFieldUpdateOperationsInput | number
    score_calories?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklySummaryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    avg_steps?: FloatFieldUpdateOperationsInput | number
    avg_sleep?: FloatFieldUpdateOperationsInput | number
    avg_water?: FloatFieldUpdateOperationsInput | number
    avg_calories?: FloatFieldUpdateOperationsInput | number
    score_steps?: IntFieldUpdateOperationsInput | number
    score_sleep?: IntFieldUpdateOperationsInput | number
    score_water?: IntFieldUpdateOperationsInput | number
    score_calories?: IntFieldUpdateOperationsInput | number
  }

  export type FriendsUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friend_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FriendsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friend_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FriendsUpdateWithoutFriendInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendsUncheckedUpdateWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FriendsUncheckedUpdateManyWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
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