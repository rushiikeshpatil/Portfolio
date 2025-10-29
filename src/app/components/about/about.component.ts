import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  educations = [
    {
      degree: 'Bachelor of Engineering in Information Technology, 2023',
      institute: 'Vidyalankar Institute of Technology, Mumbai',
      score: ['8.89 CGPA']
    },
    {
      degree: 'Diploma in Information Technology, 2020',
      institute: 'Padmashree Dr. D. Y. Patil School of Polytechnic, Navi Mumbai',
      score: ['94.56%']
    }
  ];
}
