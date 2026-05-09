'use client';

import React, { useEffect, useRef } from 'react';

const ALLOWED_ORIGIN = 'https://colyakdernegi.org.tr';

export default function IframePage() {
	const iframeRef = useRef(null);

	useEffect(() => {
		function handleMessage(event) {
			if (event.origin !== ALLOWED_ORIGIN || !event.data) return;

			if (
				event.data.type === 'colyak-report-form:resize' &&
				event.data.height
			) {
				if (iframeRef.current) {
					iframeRef.current.style.height = event.data.height + 'px';
				}
			}

			if (event.data.type === 'colyak-report-form:submitted') {
				if (window.dataLayer && typeof window.dataLayer.push === 'function') {
					window.dataLayer.push({ event: 'colyak_report_form_submitted' });
				}
			}
		}

		window.addEventListener('message', handleMessage);
		return () => window.removeEventListener('message', handleMessage);
	}, []);

	return (
		<div style={{ width: '100%' }}>
			<iframe
				ref={iframeRef}
				src='https://colyakdernegi.org.tr/embed/report-form'
				title='Çölyak Kayıt Formu'
				style={{ width: '100%', minHeight: 900, border: 0, display: 'block' }}
				loading='lazy'
			/>
		</div>
	);
}
