import { RecordsResponseDto } from './../../shared/api/models/records-response-dto';
import { RecordService } from './../../shared/api/services/record.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {
  public dataList = [];
  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.recordService
      .getManyBaseRecordControllerRecord()
      .subscribe((r: RecordsResponseDto) => {
        // FIXME #1 add detailed response
        this.dataList = r.data.data as any;
      });
  }
}
