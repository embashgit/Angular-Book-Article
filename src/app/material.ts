import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  imports: [MatButtonModule,
     MatCheckboxModule,
      MatIconModule,
      MatSidenavModule,
      MatFormFieldModule,
      MatCardModule,
      MatDividerModule,
      MatInputModule,
      MatSelectModule,
      MatGridListModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
    ],
  exports: [MatButtonModule,
     MatCheckboxModule,
      MatIconModule,
      MatSidenavModule,
      MatFormFieldModule,
      MatCardModule,
      MatDividerModule,
      MatInputModule,
      MatSelectModule,
      MatGridListModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
    ],

})
export class MaterialModule { }
