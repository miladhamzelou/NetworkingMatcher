import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {RouterModule, Routes} from '@angular/router';
import { TopicDetailsComponent } from './topic-details/topic-details.component'
import {MatChipsModule} from '@angular/material'


export const TOPIC_ID_PARAM = 'topicId'

const topicsRoutes: Routes = [
  { path: 'topic/:' + TOPIC_ID_PARAM, component: TopicDetailsComponent },
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(topicsRoutes),
    MatChipsModule,
  ],
  declarations: [
    TopicDetailsComponent,
  ],
})
export class TopicsModule { }
