import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import { ComponentsModule } from 'app/shared/components/components.module';

@NgModule({
  imports: [SharedLibsModule, ComponentsModule],
  exports: [SharedLibsModule, ComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
/**
 * This module is used to import and configure common modules for all project
 */
export class SharedModule {}
