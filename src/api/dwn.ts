import type { DwnResult } from '@/api/model/dwnModel';
import { request } from '@/utils/request';

const Api = {
  BaseDwn: '/download',
};

export function getDownload() {
  return request.get<DwnResult>({
    url: Api.BaseDwn
  });
}


