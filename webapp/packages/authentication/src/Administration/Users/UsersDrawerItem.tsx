/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import styled from 'reshadow';

import { AdministrationItemDrawerProps } from '@dbeaver/administration';
import { Tab, TabTitle, TabIcon } from '@dbeaver/core/blocks';
import { Translate } from '@dbeaver/core/localization';
import { useStyles } from '@dbeaver/core/theming';

export function UsersDrawerItem({ item, onSelect, style }: AdministrationItemDrawerProps) {
  return styled(useStyles(...style))(
    <Tab tabId={item.name} onOpen={() => onSelect(item.name)}>
      <TabIcon icon='/icons/account.svg' />
      <TabTitle><Translate token='authentication_administration_item'/></TabTitle>
    </Tab>
  );
}
