import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint.model';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  complaint: Complaint = {
    id: 0,
    title: '',
    description: '',
    status: '',
  };
  complaints: Complaint[] = [];
  notifications: string[] = [];

  constructor(private authService: AuthService, private complaintService: ComplaintService) {}

  ngOnInit() {
    this.complaints = this.complaintService.getComplaints();
    this.notifications = this.complaintService.getNotifications();
  }

  registerComplaint() {
    this.complaintService.registerComplaint(this.complaint);
    this.complaint = { id: 0, title: '', description: '', status: '' }; // Reset the form
    this.complaints = this.complaintService.getComplaints(); // Refresh the list
    this.notifications = this.complaintService.getNotifications(); // Refresh notifications
  }

  logout() {
    this.authService.logout();
  }
}
