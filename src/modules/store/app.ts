import { StoreService } from '../services/store'

interface AppStoreState {
  auth: boolean
}

class AppStoreService extends StoreService<AppStoreState> {}

const AppStore = new AppStoreService('app', {
  auth: false
})

export { AppStore, type AppStoreState }
