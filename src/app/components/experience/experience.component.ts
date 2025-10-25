import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  internships = [
    {
      role: 'Software Engineer Intern',
      organization: 'Deserve Services, Mumbai | May 2019 – Jun 2019',
      work: ['Worked on Java and Web Technologies to design and develop an Airline Reservation System, enhancing understanding of full stack application development.']
    },
    {
      role: 'IoT Research Intern',
      organization: 'Vidyalankar Institute of Technology , Mumbai | Jun 2021 – Sep 2021',
      work: ['Built an IoT-based Driver Drowsiness Detection System to prevent road accidents using sensor-based monitoring.']
    }
  ];
}
