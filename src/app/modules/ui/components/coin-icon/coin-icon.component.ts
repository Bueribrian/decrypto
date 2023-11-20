import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coin-icon',
  templateUrl: './coin-icon.component.html',
  styleUrls: ['./coin-icon.component.scss']
})
export class CoinIconComponent {
  @Input({ required: true, alias: 'url' })
  public url!: string;
  
  @Input({ alias: 'width' })
  public width: string = '80px';

  @Input({ alias: 'height' })
  public height: string = 'auto';

}
