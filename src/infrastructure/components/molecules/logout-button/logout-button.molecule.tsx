import {IconButtonAtom} from '@components';
import type {ReactElement} from 'react';
import {LogoutButtonMoleculeType} from './logout-button.type';

const LogoutButtonMolecule = ({
  iconButtonAtom,
}: LogoutButtonMoleculeType): ReactElement => (
  <IconButtonAtom {...iconButtonAtom} />
);

export default LogoutButtonMolecule;
