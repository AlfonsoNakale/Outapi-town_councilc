import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css'],
})
export class LandingPage {
  raw14ch: string = ' '
  rawon2a: string = ' '
  raw58q7: string = ' '
  raw4vdo: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Outapi-town_council')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Outapi-town_council',
      },
    ])
  }
}
