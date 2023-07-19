import { Component, Input } from '@angular/core';
import {
  BrnTabsComponent,
  BrnTabsContentDirective,
  BrnTabsListComponent,
  BrnTabsTriggerDirective,
} from '@spartan-ng/ui/tabs/brain';

const tabBtn =
  'inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none';
const tabContent =
  'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border border-border';
@Component({
  selector: 'spartan-tabs',
  standalone: true,
  imports: [BrnTabsComponent, BrnTabsListComponent, BrnTabsTriggerDirective, BrnTabsContentDirective],
  host: {
    class: 'block',
  },
  template: `
    <brn-tabs class="block" [value]="firstTab">
      <brn-tabs-list
        class="border-border inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0 mb-4"
        [aria-label]="'Tablist showing ' + firstTab + ' and ' + secondTab"
      >
        <button class="${tabBtn}" [brnTabsTrigger]="firstTab">{{ firstTab }}</button>
        <button class="${tabBtn}" [brnTabsTrigger]="secondTab">{{ secondTab }}</button>
      </brn-tabs-list>
      <div class="${tabContent}" [brnTabsContent]="firstTab">
        <ng-content select="[firstTab]" />
      </div>
      <div class="${tabContent}" [brnTabsContent]="secondTab">
        <ng-content select="[secondTab]" />
      </div>
    </brn-tabs>
  `,
})
export class TabsComponent {
  @Input()
  firstTab = '';
  @Input()
  secondTab = '';
}
