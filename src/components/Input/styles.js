import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const TInput = styled(Input)`
  align-self: stretch;
  background: ${({ readOnly }) => readOnly ? '#F5F5F5' : '#FFFFFF'};
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 13px 15px;
  font-size: 16px;
  line-height: 19px;
  color: #999999;
`;
