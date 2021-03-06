/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react';
import { useCallback } from 'react';

import { ListItem } from '@dbeaver/core/blocks';

export interface IDriver {
  id: string;
  icon?: string;
  name?: string;
  description?: string;
}

type DriverProps = {
  driver: IDriver;
  onSelect(driverId: string): void;
}

export const Driver = observer(function Driver({ driver, onSelect }: DriverProps) {
  const select = useCallback(() => onSelect(driver.id), [driver]);

  return <ListItem icon={driver.icon} name={driver.name} description={driver.description} onClick={select}/>;
});
