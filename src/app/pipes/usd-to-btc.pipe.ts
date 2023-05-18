import { Pipe, PipeTransform } from '@angular/core';
const USDBTC = 27136;
@Pipe({
  name: 'usdToBtc'
})
export class UsdToBtcPipe implements PipeTransform {

  transform(amount: number, isUsdToBtc = true): number {
    if (isUsdToBtc)
      return amount / USDBTC;
    return amount * USDBTC;
  }

}
