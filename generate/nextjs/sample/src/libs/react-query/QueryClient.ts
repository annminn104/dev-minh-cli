import { QueryClient as TSQueryClient } from '@tanstack/query-core';
import { cache } from 'react';

export const QueryClient = cache(() => new TSQueryClient());
