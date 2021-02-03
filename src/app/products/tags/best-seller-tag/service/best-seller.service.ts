import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Utils } from "src/app/utils/utils";
import { bestSellerProducts } from "./best-seller.data";

@Injectable({ providedIn: 'root' })
export class BestSellerService {

  getBestSeller(id: string): Observable<boolean> {
    const item = bestSellerProducts.find(item => item.id === id);
    if(item) {
      return Utils.getObservable<boolean>(item.bestSeller);
    }
    return Utils.getObservable<boolean>(false);
  }
}
