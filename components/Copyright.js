import React from 'react';
import Link from 'next/link';

function Copyright(props) {
	return(
		<div>
      <hr />
      <div className="copyright">
        <span>©2018 Quality Publicidad. Todos los derechos reservados.</span>
        <div className="policies">
          <Link href="/terminos">
            <a>Términos de Uso</a>
          </Link>
          <Link href="/privacidad">
            <a>Política de Privacidad</a>
          </Link>
          <Link href="/mapa">
            <a>Mapa del sitio</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .copyright{
          display:grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          font-size: 12px;
          margin-bottom: 10px;
        }
        .policies{
          display:grid;
          grid-template-columns: 1fr 1fr 1fr;
          justify-items: center;
          grid-column-gap: 25px;
        }
        hr{
          width: 50px;
        }
        a, span{
					color: #fff;
        }
        a{
          cursor: pointer;
          text-decoration:none;
          -o-text-decoration:none;
          -moz-text-decoration:none;
          -webkit-text-decoration:none;
        }
        a:hover{
          color: #56a9ff;
        }
        @media only screen and (max-width : 768px) {
          .copyright{
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
	);
}

export default Copyright;