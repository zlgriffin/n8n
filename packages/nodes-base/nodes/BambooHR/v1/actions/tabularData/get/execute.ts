import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
} from 'n8n-workflow';

import {
	apiRequest,
} from '../../../transport';

export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const requestMethod = 'GET';

	//meta data
	const id = this.getNodeParameter('id', index) as string;
	const tableName = this.getNodeParameter('table', index) as string;

	//endpoint
	const endpoint = `employees/${id}/tables/${tableName}`;

	//response
	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	//return
	return this.helpers.returnJsonArray(responseData);
}
