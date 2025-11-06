import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { environment } from '../../environments/environment';

// Interceptor to add Strapi authentication token to HTTP requests
export const strapiAuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const token = environment.strapiApiToken;
    const strapiBase = environment.strapiUrl;

    // Add Authorization header if token exists and request is to Strapi URL
    if (token && req.url.startsWith(strapiBase)) {
        // Clone the request to add the new header
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
        // Handle the modified request using functional handler
        return next(authReq);
    }

    // Pass through the request unmodified if no token or not a Strapi URL
    return next(req);
}

