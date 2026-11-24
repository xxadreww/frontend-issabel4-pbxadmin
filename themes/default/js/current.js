$(function () {
    // =========================================================================
    // ICONOS SOLIDOS ESTILO FONT AWESOME (Rellenos, nítidos y sin depender de CDN)
    // =========================================================================
    var ICONS = {
        trash: '<svg class="pbx-svg-icon" viewBox="0 0 448 512" fill="currentColor"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg>',
        followme: '<svg class="pbx-svg-icon" viewBox="0 0 512 512" fill="currentColor"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>',
        mic: '<svg class="pbx-svg-icon" viewBox="0 0 352 512" fill="currentColor"><path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"/></svg>',
        plus: '<svg class="pbx-svg-icon" viewBox="0 0 512 512" fill="currentColor"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/></svg>',
        edit: '<svg class="pbx-svg-icon" viewBox="0 0 512 512" fill="currentColor"><path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0z"/></svg>',
        sliders: '<svg class="pbx-svg-icon" viewBox="0 0 512 512" fill="currentColor"><path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>',
        banner: '<svg viewBox="0 0 512 512" fill="currentColor"><path d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"/></svg>'
    };

    function pickIconForText(text) {
        var t = (text || '').toLowerCase();
        if (t.indexOf('eliminar') !== -1 || t.indexOf('delete') !== -1 || t.indexOf('borrar') !== -1 || t.indexOf('remove') !== -1 || t.indexOf('remover') !== -1) {
            return ICONS.trash;
        }
        if (t.indexOf('follow') !== -1 || t.indexOf('sígueme') !== -1 || t.indexOf('sigueme') !== -1) {
            return ICONS.followme;
        }
        if (t.indexOf('gabcast') !== -1 || t.indexOf('audio') !== -1 || t.indexOf('grabaci') !== -1) {
            return ICONS.mic;
        }
        if (t.indexOf('edit') !== -1 || t.indexOf('editar') !== -1) {
            return ICONS.edit;
        }
        if (t.indexOf('add') !== -1 || t.indexOf('añadir') !== -1 || t.indexOf('agregar') !== -1) {
            return ICONS.plus;
        }
        return ICONS.sliders;
    }

    function stylizeActionLink($a) {
        var cleanText = $.trim($a.text().replace(/\u00a0/g, ' '));
        var lower = cleanText.toLowerCase();

        // Quitar imágenes viejas de Issabel (core_delete.png, user_add.png, etc.)
        $a.find('img').remove();
        $a.html(pickIconForText(cleanText) + '<span>' + $('<div>').text(cleanText).html() + '</span>');

        $a.addClass('pbx-top-action-btn');
        if (lower.indexOf('eliminar') !== -1 || lower.indexOf('delete') !== -1 || lower.indexOf('borrar') !== -1 || lower.indexOf('remove') !== -1 || lower.indexOf('remover') !== -1) {
            $a.addClass('pbx-top-action-danger');
        } else if (lower.indexOf('follow') !== -1 || lower.indexOf('sígueme') !== -1 || lower.indexOf('sigueme') !== -1) {
            $a.addClass('pbx-top-action-success');
        } else if (lower.indexOf('add ') === 0 || lower.indexOf('añadir') === 0 || lower.indexOf('agregar') === 0) {
            $a.addClass('pbx-top-action-purple');
        }
    }

    // 1. Resaltar ítem activo por parámetro ?display=
    function getQueryParam(name, url) {
        var regex = new RegExp('[?&]' + name + '=([^&#]*)', 'i');
        var match = regex.exec(url || window.location.href);
        return match ? decodeURIComponent(match[1]) : null;
    }

    var currentDisplay = getQueryParam('display') || 'extensions';

    $('#nav ul li a[data-display]').each(function () {
        var itemDisplay = $(this).attr('data-display');
        if (itemDisplay === currentDisplay) {
            $(this).addClass('current');
        } else {
            $(this).removeClass('current');
        }
    });

    if ($('#nav ul li a.current').length === 0) {
        var url = window.location.href;
        $('#nav ul li a').each(function () {
            if (this.href && url === this.href) {
                $(this).addClass('current');
            }
        });
    }

    // 2. Categorías colapsables en el sidebar izquierdo
    var storageKey = 'pbx_nav_collapsed_cats';
    var collapsed = {};
    try {
        collapsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch (e) {
        collapsed = {};
    }

    function applyCollapsedState() {
        $('#nav ul li.category-header[data-pbx-cat]').each(function () {
            var catId = $(this).attr('data-pbx-cat');
            var $items = $('#nav ul li.pbx-nav-item[data-pbx-parent="' + catId + '"]');
            var hasActive = $items.find('a.current').length > 0;

            if (collapsed[catId] && !hasActive) {
                $(this).addClass('pbx-cat-collapsed');
                $items.addClass('pbx-item-hidden');
            } else {
                $(this).removeClass('pbx-cat-collapsed');
                $items.removeClass('pbx-item-hidden');
            }
        });
    }

    applyCollapsedState();

    $('#nav').on('click', 'li.category-header[data-pbx-cat]', function () {
        var catId = $(this).attr('data-pbx-cat');
        var isCollapsed = $(this).toggleClass('pbx-cat-collapsed').hasClass('pbx-cat-collapsed');
        $('#nav ul li.pbx-nav-item[data-pbx-parent="' + catId + '"]').toggleClass('pbx-item-hidden', isCollapsed);
        collapsed[catId] = isCollapsed;
        try {
            localStorage.setItem(storageKey, JSON.stringify(collapsed));
        } catch (e) {}
    });

    // 3. Filtro rápido del sidebar izquierdo
    $('#pbx_nav_filter').on('input', function () {
        var q = $.trim($(this).val()).toLowerCase();
        if (!q) {
            $('#nav ul li.pbx-nav-item').removeClass('pbx-item-hidden');
            $('#nav ul li.category-header').show();
            applyCollapsedState();
            return;
        }

        $('#nav ul li.category-header[data-pbx-cat]').each(function () {
            var catId = $(this).attr('data-pbx-cat');
            var $items = $('#nav ul li.pbx-nav-item[data-pbx-parent="' + catId + '"]');
            var visibleCount = 0;

            $items.each(function () {
                var text = $(this).text().toLowerCase();
                if (text.indexOf(q) !== -1) {
                    $(this).removeClass('pbx-item-hidden');
                    visibleCount++;
                } else {
                    $(this).addClass('pbx-item-hidden');
                }
            });

            if (visibleCount > 0) {
                $(this).show().removeClass('pbx-cat-collapsed');
            } else {
                $(this).hide();
            }
        });
    });

    // 4. Cabecera morada SIEMPRE arriba de #page_body con el nombre del apartado activo del sidebar
    var $pageBody = $('#content_pbx #page_body');
    var activeTitle = $.trim($('#nav ul li a.current').first().text());
    if ($pageBody.length && activeTitle && $('#content_pbx .pbx-module-banner').length === 0) {
        var $banner = $('<div class="pbx-module-banner">' + ICONS.banner + '<span>' + $('<div>').text(activeTitle).html() + '</span></div>');
        $pageBody.before($banner);
    }

    // 5. Layout 2 columnas limpio cuando existe .rnav (evita desbordes y cierra bien el cuadro derecho)
    var $rnav = $pageBody.children('.rnav').first();
    var $mainContainer = $pageBody;

    if ($pageBody.length && $rnav.length && $pageBody.children('.pbx-main-col').length === 0) {
        var $mainCol = $('<div class="pbx-main-col"></div>');
        var nodesToMove = [];
        $pageBody.contents().each(function () {
            if (this === $rnav[0]) return;
            if (this.nodeType === 1 && this.tagName.toLowerCase() === 'script') return;
            nodesToMove.push(this);
        });
        $pageBody.prepend($mainCol);
        for (var i = 0; i < nodesToMove.length; i++) {
            $mainCol[0].appendChild(nodesToMove[i]);
        }
        $mainCol.after($rnav);
        $pageBody.addClass('pbx-has-rnav');
        $mainContainer = $mainCol;
    }

    // 6. Buscador compacto automático para el listado derecho (.rnav)
    if ($rnav.length && $rnav.find('ul li').length > 6 && $rnav.find('.pbx-rnav-search').length === 0) {
        var $searchWrap = $('<div class="pbx-rnav-search-wrap"><input type="text" class="pbx-rnav-search" placeholder="Buscar en la lista..." autocomplete="off" /></div>');
        $rnav.prepend($searchWrap);

        $searchWrap.find('input').on('input', function () {
            var q = $.trim($(this).val()).toLowerCase();
            $rnav.find('ul li').each(function (idx) {
                if (idx === 0) return;
                var text = $(this).text().toLowerCase();
                $(this).toggle(!q || text.indexOf(q) !== -1);
            });
        });
    }

    // 7. Agrupar enlaces de acción superiores (Eliminar, Add Follow Me, Add Gabcast, etc.) en 1 línea + iconos SVG propios
    var $firstH2 = $mainContainer.find('h2').first();
    if ($firstH2.length) {
        var actionLinks = [];
        var wrappersToRemove = [];

        // Caso A: enlaces en <p><a>...</a></p> directamente después de <h2> (ej: Troncales, Rutas entrantes)
        var $cursor = $firstH2.next();
        while ($cursor.length && $cursor.is('p')) {
            var $linksInP = $cursor.find('a');
            var nonLinkText = $.trim($cursor.clone().find('a').remove().end().text());
            if ($linksInP.length === 1 && nonLinkText === '') {
                actionLinks.push($linksInP.first());
                wrappersToRemove.push($cursor);
                $cursor = $cursor.next();
            } else {
                break;
            }
        }

        // Caso B: enlaces tipo gui_link dentro de la tabla principal antes de la primera sección <h5> (ej: Extensiones)
        var $topTable = $mainContainer.find('form table').first();
        if ($topTable.length) {
            var rows = $topTable.find('> tbody > tr, > tr');
            rows.each(function () {
                var $tr = $(this);
                if ($tr.find('h5').length > 0) {
                    return false;
                }
                var $inputs = $tr.find('input:not([type="hidden"]), select, textarea, button');
                var $links = $tr.find('a:not(.info)');
                if ($inputs.length === 0 && $links.length === 1) {
                    var extraText = $.trim($tr.clone().find('a').remove().end().text());
                    if (extraText === '') {
                        actionLinks.push($links.first());
                        wrappersToRemove.push($tr);
                    }
                }
            });
        }

        if (actionLinks.length > 0) {
            var $actionBar = $('<div class="pbx-top-actions"></div>');
            for (var j = 0; j < actionLinks.length; j++) {
                stylizeActionLink(actionLinks[j]);
                $actionBar.append(actionLinks[j]);
            }
            for (var k = 0; k < wrappersToRemove.length; k++) {
                wrappersToRemove[k].remove();
            }
            $firstH2.after($actionBar);
        }
    }

    // 7b. Reemplazar también cualquier otro enlace suelto de Eliminar / Editar con iconos viejos (*.png) en Troncales/Rutas/etc.
    $mainContainer.find('a:not(.pbx-top-action-btn):not(.info)').each(function () {
        var $a = $(this);
        var $img = $a.find('img[src*="delete"], img[src*="user_"], img[src*="core_"]');
        if ($img.length > 0 && $.trim($a.text()) !== '') {
            stylizeActionLink($a);
            $a.addClass('pbx-inline-action-btn');
        }
    });

    // 8. Ocultar visualmente filas <tr> vacías o que solo contienen <input type="hidden"> (elimina huecos enormes)
    $('#content_pbx form table tr').each(function () {
        var $tr = $(this);
        if ($tr.hasClass('pbx-empty-row')) return;
        if ($tr.find('input:not([type="hidden"]), select, textarea, button, img, a, iframe, h1, h2, h3, h4, h5, hr, .ui-button').length > 0) {
            return;
        }
        var text = $.trim($tr.text().replace(/\u00a0/g, ''));
        if (text === '') {
            $tr.addClass('pbx-empty-row');
        }
    });

    // 9. Ordenar tablas multicolumna (ej: Códigos de funcionalidad): cabecera oscura + separadores de grupo en lila/morado
    $('#content_pbx form > table').each(function () {
        var $tbl = $(this);
        var maxCols = 0;
        var $rows = $tbl.find('> tbody > tr, > tr');

        $rows.each(function () {
            var c = $(this).children('td, th').length;
            if (c > maxCols) maxCols = c;
        });

        // Si es una tabla de 3 o más columnas (ej: Feature Codes), darle estilo de tabla ordenada
        if (maxCols >= 3) {
            $tbl.addClass('pbx-grid-table');

            $rows.each(function (idx) {
                var $tr = $(this);
                if ($tr.hasClass('pbx-empty-row')) return;
                if ($tr.find('h5').length > 0) return;

                var hasControls = $tr.find('input:not([type="hidden"]), select, textarea, button').length > 0;
                if (hasControls) return;

                var $cells = $tr.children('td, th');
                var nonEmptyCells = 0;
                $cells.each(function () {
                    if ($.trim($(this).text().replace(/\u00a0/g, '')) !== '') nonEmptyCells++;
                });

                // Fila de encabezados de columna (ej: "Usar Por defecto?" | "Característica Estado")
                if ($tr.children('th').length >= 2 || (idx <= 2 && nonEmptyCells >= 2 && $cells.length >= 3)) {
                    $tr.addClass('pbx-table-thead-row');
                }
                // Fila título de grupo (ej: "Lista negra", "Jefe Secretaria", "Desvío de llamadas")
                else if (nonEmptyCells === 1 && ($tr.find('b, strong, h3, h4').length > 0 || $cells.first().attr('colspan'))) {
                    $tr.addClass('pbx-group-header-row');
                }
            });
        }
    });
});
