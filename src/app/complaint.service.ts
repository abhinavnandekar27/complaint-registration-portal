import { Injectable } from '@angular/core';
import { Complaint } from './complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private complaints: Complaint[] = [];
  private notifications: string[] = [];
  private nextId = 1;
  private STORAGE_KEY_COMPLAINTS = 'complaints';
  private STORAGE_KEY_NOTIFICATIONS = 'notifications';

  constructor() {
    // Load complaints from local storage on service initialization
    const storedComplaints = localStorage.getItem(this.STORAGE_KEY_COMPLAINTS);
    if (storedComplaints) {
      try {
        this.complaints = JSON.parse(storedComplaints);
        this.nextId = this.complaints.reduce((maxId, complaint) => Math.max(maxId, complaint.id), 0) + 1;
      } catch (error) {
        console.error('Error parsing stored complaints:', error);
        // Clear invalid stored data
        localStorage.removeItem(this.STORAGE_KEY_COMPLAINTS);
      }
    }

    // Load notifications from local storage on service initialization
    const storedNotifications = localStorage.getItem(this.STORAGE_KEY_NOTIFICATIONS);
    if (storedNotifications) {
      try {
        this.notifications = JSON.parse(storedNotifications);
      } catch (error) {
        console.error('Error parsing stored notifications:', error);
        // Clear invalid stored data
        localStorage.removeItem(this.STORAGE_KEY_NOTIFICATIONS);
      }
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.STORAGE_KEY_COMPLAINTS, JSON.stringify(this.complaints));
    localStorage.setItem(this.STORAGE_KEY_NOTIFICATIONS, JSON.stringify(this.notifications));
  }

  getComplaints(): Complaint[] {
    return this.complaints;
  }

  getNotifications(): string[] {
    return this.notifications;
  }

  registerComplaint(complaint: Complaint): void {
    complaint.id = this.nextId++;
    complaint.status = 'Pending';
    complaint.remark = '';
    this.complaints.push(complaint);
    this.notifications.push(`Complaint titled "${complaint.title}" has been registered and is pending.`);
    this.saveToLocalStorage();
  }

  updateComplaintStatus(id: number, status: string, remark: string = ''): void {
    const complaint = this.complaints.find(c => c.id === id);
    if (complaint) {
      complaint.status = status;
      complaint.remark = remark;
      this.notifications.push(`Complaint titled "${complaint.title}" status has been updated to "${status}".`);
      this.saveToLocalStorage();
    } else {
      console.error('Complaint not found:', id);
    }
  }

  deleteComplaint(id: number): void {
    const index = this.complaints.findIndex(c => c.id === id);
    if (index !== -1) {
      this.complaints.splice(index, 1);
      this.notifications.push(`Complaint with ID "${id}" has been deleted.`);
      this.saveToLocalStorage();
    } else {
      console.error('Complaint not found:', id);
    }
  }
}
