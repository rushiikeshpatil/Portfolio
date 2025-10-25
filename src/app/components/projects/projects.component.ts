import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Backend Development',
      subtitle: 'Multiple Services',
      points: ['100% accuracy in delta computations', 'Kafka + Logstash integration', 'Handled 4+ Services simultaneously']
    },
    {
      title: 'Frontend Development',
      subtitle: 'Low code platform',
      points: ['Angular-based low-code', 'Plugin architecture for rapid customization and scalability', 'Used by 400+ customers worldwide']
    },
    {
      title: 'Audit AI Agent & UI',
      subtitle: 'LLM-powered insights',
      points: ['Automated document summaries', 'Reduced manual review time', 'Integrated into export pipeline']
    },
    {
      title: 'Microsoft Teams App',
      subtitle: 'Collaboration Utilities',
      points: ['Built from scratch', 'AI-powered helpers', 'PoC for next-gen features']
    }
  ];
}
