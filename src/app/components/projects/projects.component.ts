import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Audit Delta Calculations Service',
      subtitle: 'High-performance backend',
      points: ['100% accuracy in delta computations', 'Improved processing efficiency', 'Kafka + Logstash integration']
    },
    {
      title: 'Audit AI Agent & UI',
      subtitle: 'LLM-powered insights',
      points: ['Automated document summaries', 'Reduced manual review time', 'Integrated into export pipeline']
    },
    {
      title: 'Microsoft Teams App',
      subtitle: 'Collaboration utilities',
      points: ['Built from scratch', 'AI-powered helpers', 'PoC for next-gen features']
    },
    {
      title: 'Migration Notebook',
      subtitle: 'Data migration',
      points: ['ADB notebook to migrate legacy audit data', 'Improved migration efficiency by 70%']
    }
  ];
}
