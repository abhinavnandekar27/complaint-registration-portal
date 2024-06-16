import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  complaints: Complaint[] = [];
  remark: string = '';

  constructor(private authService: AuthService, private complaintService: ComplaintService) {}

  ngOnInit() {
    this.complaints = this.complaintService.getComplaints();
  }

  updateStatus(id: number, status: string) {
    this.complaintService.updateComplaintStatus(id, status, this.remark);
    this.remark = ''; // Clear the remark after updating
  }

  deleteComplaint(id: number) {
    this.complaintService.deleteComplaint(id);
    // After deleting, refresh the complaints list
    this.complaints = this.complaintService.getComplaints();
  }

  logout() {
    this.authService.logout();
  }
}
