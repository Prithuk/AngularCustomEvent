import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintcreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onAddServer() {
    this.serverCreated.emit({ 
      serverName: this.newServerName, serverContent: this.newServerContent 
    });
  }


  onAddBlueprint() {
    this.blueprintcreated.emit({ 
      serverName: this.newServerName, serverContent: this.newServerContent 
    });
  }
}
