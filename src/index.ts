export default {
	async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
		const cf = request.cf;

		const responseData = {
			ip: request.headers.get("cf-connecting-ip"),
			country: cf?.country,
			city: cf?.city,
			region: cf?.region,
			postalCode: cf?.postalCode,
			latitude: cf?.latitude,
			longitude: cf?.longitude,
			timezone: cf?.timezone,
			asn: cf?.asn,
			isp: cf?.asOrganization,
			httpProtocol: request.cf?.httpProtocol,
			userAgent: request.headers.get("user-agent")
		};

		return new Response(JSON.stringify(responseData, null, 2), {
			headers: {
				"content-type": "application/json;charset=UTF-8",
				"Access-Control-Allow-Origin": "*", // 允许跨域
			},
		});
	},
};