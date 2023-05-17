import { Component,EventEmitter, Output, Input } from '@angular/core';
import { ImageUrlTransformService } from '../../services/imageuritransformservice.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Output() closeCard: EventEmitter<any> = new EventEmitter();
  @Output() showListEvent: EventEmitter<any> = new EventEmitter();
  @Input() user: any;
 

  loader: boolean = false;
  processingMessage: string = "";

  constructor(private imageUrlTransformService: ImageUrlTransformService) { }

  get transformedImageUrl(): string {
    return this.imageUrlTransformService.transform(this.user?.profile_pic_url_hd);
  }


  close() {
    this.closeCard.emit();
  }

  showList(){
    this.showListEvent.emit();
  }

  find(){
    this.loader = true;
  
  }

  getFormattedCount(count: number): string {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    } else {
      return count.toString();
    }
  }

  load(){
    this.loader = true;
    this.processingMessage = "Sending request";

    let timeoutValue = 0;

    setTimeout(() => {
        this.processingMessage = "Loading Data...";
    }, timeoutValue += 1500);

    setTimeout(() => {
        this.processingMessage = "Getting response from origin master...";
    }, timeoutValue += 3000);

    setTimeout(() => {
        this.processingMessage = "Please be patient..";
    }, timeoutValue += 5000);

    setTimeout(() => {
        this.close();
        this.showList();
    }, timeoutValue += 4000);

  }

  


}
