import { Injectable } from '@angular/core';

import { Skill } from '../../../shared/models/skills';
import { Observable, of} from 'rxjs';
import { Level } from '../../../shared/types/level.enum';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill [] = [
    {
      id: 0,
      name: 'Angular',
      level: Level.Beginner
    },
    {
      id: 1,
      name: 'React',
      level: Level.Beginner
    },
    {
      id: 2,
      name: 'Java Script',
      level: Level.Beginner
    },
    {
      id: 3,
      name: 'Playing Drums',
      level: Level.Intermediate 
    }
  ];

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  }

  constructor() { }
}
