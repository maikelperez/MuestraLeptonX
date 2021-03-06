import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeLeptonModule } from '@volo/abp.ng.theme.lepton';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';

import { ThemeLeptonXModule } from '@volosoft/abp.ng.theme.lepton-x';
import { AbpSideMenuLayoutModule } from '@volosoft/abp.ng.theme.lepton-x/layouts';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    //ThemeLeptonModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    ThemeLeptonXModule,
    AbpSideMenuLayoutModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    //ThemeLeptonModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    ThemeLeptonXModule,
    AbpSideMenuLayoutModule
  ],
  providers: []
})
export class SharedModule {}
