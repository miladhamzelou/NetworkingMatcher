import {Component, Input, OnInit} from '@angular/core';
import {UserListService} from '../../user-list/user-list.service';
import {ActivatedRoute} from '@angular/router';
import {
  MeetingAttendanceByUser, MeetingAttendanceByUserWithUserData,
  MeetingAttendanceService,
} from '../meeting-attendance.service';
import {AuthService} from '../../user-profile/auth.service';
import {DbListReadOnly} from '../../db.service';

@Component({
  selector: 'app-meeting-attendance-user-list',
  templateUrl: './meeting-attendance-user-list.component.html',
  styleUrls: ['./meeting-attendance-user-list.component.scss'],
})
export class MeetingAttendanceUserListComponent implements OnInit {

  userList: DbListReadOnly<MeetingAttendanceByUserWithUserData>;

  @Input() meetingId: string;


  constructor(private meetingAttendanceService: MeetingAttendanceService,) {
  }

  ngOnInit() {

    this.userList =
      this.meetingAttendanceService.fetchMeetingAttendanceByUserWithUserData(this.meetingId);

    this.meetingAttendanceService.fetchMeetingAttendanceByUserWithUserData(this.meetingId)
      .subscribe(list => {
      console.log('fetchMeetingAttendanceByUserWithUserData subscribed: ', list);
    });
  }

  trackByKey(idx, val) {
    return val.$key
  }
}