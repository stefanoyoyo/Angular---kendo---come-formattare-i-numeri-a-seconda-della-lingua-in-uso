import { Component } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';

@Component({
    selector: 'my-app',
    template: `
    <div class="col-xs-12 col-md-12" style="margin-bottom: 1em;">
        <div class="col-xs-12 col-md-9">
            <h5 style="color:red;">Format 1234.567 using a 'n2' format</h5>
        </div>
        <div class="col-xs-12 col-md-9" style="font-size: 1.2em;">
            Result: <strong><em>{{ intl.formatNumber(1234.567, "n2") }}</em></strong>
        </div>
    </div>

    <div class="col-xs-12 col-md-12" style="margin-bottom: 1em;">
        <div class="col-xs-12 col-md-9">
            <h5 style="color:red;">Format 1234.567 using a 'c' format</h5>
        </div>
        <div class="col-xs-12 col-md-9" style="font-size: 1.2em;">
            Result: <strong><em>{{ intl.formatNumber(1234.567, "c", "de") }}</em></strong>
        </div>
    </div>

    <div class="col-xs-12 col-md-12" style="margin-bottom: 1em;">
        <div class="col-xs-12 col-md-9">
            <h5 style="color:red;">Format 1234.567 using custom format options</h5>
        </div>
        <div class="col-xs-12 col-md-9" style="font-size: 1.2em;">
            Result: <strong><em>{{ intl.formatNumber(1234.567, customCurrencyOptions, "bg") }}</em></strong>
        </div>
    </div>

    <div class="col-xs-12 col-md-12">
        <div class="col-xs-12 col-md-9">
            <h5 style="color:red;">Format 1234.567 using a customr'##,#.00' format</h5>
        </div>
        <div class="col-xs-12 col-md-9" style="font-size: 1.2em;">
            Result: <strong><em>{{ intl.formatNumber(2345678, "##,#.00") }}</em></strong>
        </div>
    </div>
    `
})
export class AppComponent {
    public customCurrencyOptions = {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'displayName'
    };

    constructor(public intl: IntlService) {}
}