import { render, screen, renderHook, act} from '@testing-library/react';
import userEvent  from '@testing-library/user-event';

import { UserLogonOptions  } from '../UserLogonOptions';

test('<UserLogonOptions/>', () => {
  render(<UserLogonOptions />);
})
