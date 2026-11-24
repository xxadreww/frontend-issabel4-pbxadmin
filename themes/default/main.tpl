<div class="pbx-layout-wrapper">
  <div class="pbx-sidebar-col">
    <div id="nav">
      <div id="nav-setup" class="tabs-container">
        <div class="pbx-nav-brand">PBX Config</div>
        <div class="pbx-nav-search-wrap">
          <input type="text" id="pbx_nav_filter" class="pbx-nav-search" placeholder="Filtrar men&uacute;..." autocomplete="off" />
        </div>
        <ul class="pbx-nav-list">
          {foreach name=outer key=category item=menucategory from=$leftmenu}
              <li class="category category-header" data-pbx-cat="{$smarty.foreach.outer.index}">
                <span class="pbx-cat-label">{$category}</span>
                <span class="pbx-cat-caret">&#9662;</span>
              </li>
              {foreach name=inner item=menuitem from=$menucategory}
                  <li class="pbx-nav-item" data-pbx-parent="{$smarty.foreach.outer.index}"><a href="/?menu=pbxconfig&amp;type=setup&amp;display={$menuitem.urlkey}" data-display="{$menuitem.urlkey}">{$menuitem.name}</a></li>
              {/foreach}
          {/foreach}

          <li class="category category-header pbx-option-header">{$Option}</li>
          <li class="pbx-nav-item pbx-unembedded-item">
            <a href="/admin/" target="_blank">{$Unembedded_IssabelPBX}</a>
            <a href="#" class="info pbx-info-badge" title="Info">i<span>{$INFO}</span></a>
          </li>
        </ul>
      </div>{* div id="nav-setup" *}
    </div>{* div id="nav" *}
  </div>

  <div id="content_pbx">{$htmlFPBX}</div>
</div>
