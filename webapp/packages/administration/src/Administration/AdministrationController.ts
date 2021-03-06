/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { computed } from 'mobx';

import { injectable } from '@dbeaver/core/di';

import { AdministrationItemService } from '../AdministrationItem/AdministrationItemService';

@injectable()
export class AdministrationController {
  @computed get items() {
    return this.administrationItemService
      .items
      .concat()
      .sort((a, b) => a.order - b.order);
  }

  constructor(
    private administrationItemService: AdministrationItemService
  ) {}
}
