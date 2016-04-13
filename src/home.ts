import {BindingEngine, inject} from 'aurelia-framework';

@inject(BindingEngine)
export class Home{

  name: string;

  constructor(bindingEngine: BindingEngine){
    this.name = 'Vlad';

    let subscription = bindingEngine
      .propertyObserver(this, 'name')
      .subscribe(this.nameChange);
  }

  nameChange(newValue, oldValue){
    console.log(`observeMe value changed from: ${oldValue} to:${newValue}`);
  }
}
