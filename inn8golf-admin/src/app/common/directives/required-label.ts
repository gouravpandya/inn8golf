import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
	selector: '[requiredLabel]'
})

export class RequiredLabelDirective {

	constructor(private element: ElementRef, private renderer: Renderer2) { }

	@Input() set requiredLabel(shouldAdd: string) {
		if (shouldAdd === 'false') {
			this.renderer.removeClass(this.element.nativeElement, 'required');
		} else {
			this.renderer.addClass(this.element.nativeElement, 'required');
		}
	}

}
