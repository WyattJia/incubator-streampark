/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { AxiosResponse } from 'axios';
import { defHttp } from '/@/utils/http/axios';
import { Result } from '/#/axios';
import { BasicTableParams } from '../model/baseModel';
import { VariableDeleteParam, VariableListRecord, VariableParam } from './model/variableModel';

enum VARIABLE_API {
  LIST = '/variable/list',
  UPDATE = '/variable/update',
  POST = '/variable/post',
  DELETE = '/variable/delete',
  SELECT = '/variable/select',
  CHECK_CODE = '/variable/check/code',
}
/**
 * get variable list
 * @param params
 * @returns
 */
export function fetchVariableList(data: BasicTableParams): Promise<VariableListRecord[]> {
  return defHttp.post({ url: VARIABLE_API.LIST, data });
}

/**
 * add member
 * @param {VariableParam} data
 * @returns {Promise<boolean>}
 */
export function fetchAddVariable(data: VariableParam): Promise<boolean> {
  return defHttp.post({ url: VARIABLE_API.POST, data });
}
/**
 * update member
 * @param {VariableParam} data
 * @returns {Promise<boolean|undefined>}
 */
export function fetchUpdateVariable(data: VariableParam): Promise<boolean | undefined> {
  return defHttp.put({ url: VARIABLE_API.UPDATE, data });
}

/**
 * delete
 * @param {VariableDeleteParam} data
 * @returns {Promise<AxiosResponse<Result>>}
 */
export function fetchVariableDelete(data: VariableDeleteParam): Promise<AxiosResponse<Result>> {
  return defHttp.delete({ url: VARIABLE_API.DELETE, data }, { isReturnNativeResponse: true });
}
/**
 * Code check
 * @param {Object} data
 * @returns {Promise<AxiosResponse<Result>>}
 */
export function fetchCheckVariableCode(data: {
  variableCode: string;
}): Promise<AxiosResponse<Result>> {
  return defHttp.post({ url: VARIABLE_API.CHECK_CODE, data }, { isReturnNativeResponse: true });
}
