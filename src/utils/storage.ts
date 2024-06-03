import localforage from 'localforage'

interface StorageData<T> {
  value: T
  expire: number | null
}

function createStorage<T extends object = StorageInterface.Default>(name: string) {
  const storage = localforage.createInstance({
    name,
  })

  /** 默认缓存期限为180天 */
  const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 180

  function set<K extends keyof T>(key: K, value: T[K], expire: number | null = DEFAULT_CACHE_TIME) {
    const storageData: StorageData<T[K]> = {
      value,
      expire: expire !== null ? Date.now() + expire * 1000 : null,
    }
    return storage.setItem(key as string, storageData)
  }

  async function get<K extends keyof T>(key: K): Promise<T[K] | null> {
    const storageData = await storage.getItem<StorageData<T[K]>>(key as string)
    if (storageData) {
      const { value, expire } = storageData
      if (expire === null || expire >= Date.now()) {
        return value
      }
      await storage.removeItem(key as string)
    }
    return null
  }

  function remove<K extends keyof T>(key: K) {
    return storage.removeItem(key as string)
  }

  function clear() {
    return storage.clear()
  }

  return {
    storage,
    set,
    get,
    remove,
    clear,
  }
}

export const defaultStorage = createStorage('default')
