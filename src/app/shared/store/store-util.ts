import { getRegistry } from '@ngneat/elf';
import { devTools } from '@ngneat/elf-devtools';

export class StoreUtil {
  static clearStores() {
    getRegistry().forEach((store) => store.reset());
  }

  static enableDevTools() {
    devTools();
  }
}
