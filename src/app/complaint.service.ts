import { Injectable } from '@angular/core';
import { Complaint } from './complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private complaints: Complaint[] = [];
  private nextId = 1;
  private STORAGE_KEY = 'complaints';

  constructor() {
    // Load complaints from local storage on service initialization
    const storedComplaints = localStorage.getItem(this.STORAGE_KEY);
    if (storedComplaints) {
      this.complaints = JSON.parse(storedComplaints);
      this.nextId = this.complaints.reduce((maxId, complaint) => Math.max(maxId, complaint.id), 0) + 1;
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.complaints));
  }

  getComplaints(): Complaint[] {
    return this.complaints;
  }

  registerComplaint(complaint: Complaint): void {
    complaint.id = this.nextId++;
    complaint.status = 'Pending';
    complaint.remark = '';
    this.complaints.push(complaint);
    this.saveToLocalStorage();
  }

  updateComplaintStatus(id: number, status: string, remark: string = ''): void {
    const complaint = this.complaints.find(c => c.id === id);
    if (complaint) {
      complaint.status = status;
      complaint.remark = remark;
      this.saveToLocalStorage();
    }
  }
}
