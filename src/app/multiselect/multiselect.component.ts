import { Component, Input, Output, OnInit, ViewChild, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';

import { FilterPip } from './../filter-pipe.pipe';

// import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';




@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {
  public _items: Array<any>;
  public _selectedItems: Array<any>;
  public isOpen: boolean = false;
  public enableFilter: boolean;
  public header = "Select some stuff";
  public filterText: string;
  public filterPlaceholder: string;
  public filterInput = new FormControl();
  private _subscription: Subscription;


  @Input() 
  items: Observable<any[]>;

  // ControlValueAccessor Intercace and mutator
  propagateChange = (_: any) => { };

  get selectedItems(): any {
    return this._selectedItems;
  };

  writeValue(value: any) {
    if (value !== undefined) {
      this._selectedItems = value;
    } else {
      this._selectedItems = [];
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void
  {  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }



  select(item: any) {
    item.checked = !item.checked;
  }

  toggleSelect() {
    this.isOpen = !this.isOpen;
  }

  clearFilter() {
    this.filterText = "";
  }

  ngOnInit() {
    this._subscription = this.items.subscribe(res => this._items = res);
    
    this.enableFilter = true;
    this.filterText = "";
    this.filterPlaceholder = "Filter..";

    this.filterInput
      .valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(term => {
        this.filterText = term;
        this.changeDetectorRef.markForCheck();
        console.log(term);
      });
  }
}
