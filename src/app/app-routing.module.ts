import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DataServerComponent } from './data-server/data-server.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'interpolation',
    pathMatch: 'full'
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'property',
    component: PropertyBindingComponent
  },
  {
    path: 'conditional',
    component: ConditionalComponent
  },
  {
    path: 'input',
    component: InputOutputComponent
  },
  {
    path: 'dataServer',
    component: DataServerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
