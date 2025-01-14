/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

declare module 'dom-align' {
	export interface IConfig {
		points: readonly [string, string];
		offset: readonly [number, number];
		targetOffset: readonly [string, string];
		overflow: {adjustX: boolean; adjustY: boolean};
	}

	export interface IConfigOptional {
		points?: readonly [string, string];
		offset?: readonly [number, number];
		targetOffset?: readonly [string, string];
		overflow?: {adjustX: boolean; adjustY: boolean};
		useCssRight?: boolean
	}

	export default function doAlign(
		sourceNode: HTMLElement,
		targetNode: HTMLElement,
		config?: IConfigOptional
	): IConfig;
}
