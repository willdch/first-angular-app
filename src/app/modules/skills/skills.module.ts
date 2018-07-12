import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './components/skills/skills.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SkillsComponent],
  exports: [SkillsComponent]
})
export class SkillsModule { }
