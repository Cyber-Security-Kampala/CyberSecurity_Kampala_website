import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = [
    { name: 'John Doe', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'Jane Doe', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'John Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'John Doe', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'Jane Doe', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'John Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'John Doe', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'Jane Doe', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'John Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'John Doe', position: 'CEO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'Jane Doe', position: 'CTO', imageUrl: '/assets/images/image1.jpeg' },
    { name: 'John Smith', position: 'COO', imageUrl: '/assets/images/image1.jpeg' },
    // Add more team members as needed
  ];
}
