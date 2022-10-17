package com.ruoyi.product.controller;

import java.util.List;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.product.domain.ProductBlastFurnaceCast;
import com.ruoyi.product.service.IProductBlastFurnaceCastService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 出铁时间计控Controller
 * 
 * @author zongyoucheng
 * @date 2022-10-11
 */
@Controller
@RequestMapping("/product/blastfurnacecast")
public class ProductBlastFurnaceCastController extends BaseController
{
    private String prefix = "product/blastfurnacecast";

    @Autowired
    private IProductBlastFurnaceCastService productBlastFurnaceCastService;

    @RequiresPermissions("product:blastfurnacecast:view")
    @GetMapping()
    public String blastfurnacecast()
    {
        return prefix + "/blastfurnacecast";
    }

    /**
     * 查询出铁时间计控列表
     */
    @RequiresPermissions("product:blastfurnacecast:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(ProductBlastFurnaceCast productBlastFurnaceCast)
    {
        startPage();
        List<ProductBlastFurnaceCast> list = productBlastFurnaceCastService.selectProductBlastFurnaceCastList(productBlastFurnaceCast);
        return getDataTable(list);
    }

    /**
     * 导出出铁时间计控列表
     */
    @RequiresPermissions("product:blastfurnacecast:export")
    @Log(title = "出铁时间计控", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(ProductBlastFurnaceCast productBlastFurnaceCast)
    {
        List<ProductBlastFurnaceCast> list = productBlastFurnaceCastService.selectProductBlastFurnaceCastList(productBlastFurnaceCast);
        ExcelUtil<ProductBlastFurnaceCast> util = new ExcelUtil<ProductBlastFurnaceCast>(ProductBlastFurnaceCast.class);
        return util.exportExcel(list, "出铁时间计控数据");
    }

    /**
     * 新增出铁时间计控
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存出铁时间计控
     */
    @RequiresPermissions("product:blastfurnacecast:add")
    @Log(title = "出铁时间计控", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(ProductBlastFurnaceCast productBlastFurnaceCast)
    {
        return toAjax(productBlastFurnaceCastService.insertProductBlastFurnaceCast(productBlastFurnaceCast));
    }

    /**
     * 修改出铁时间计控
     */
    @RequiresPermissions("product:blastfurnacecast:edit")
    @GetMapping("/edit/{blastFurnaceCastId}")
    public String edit(@PathVariable("blastFurnaceCastId") Long blastFurnaceCastId, ModelMap mmap)
    {
        ProductBlastFurnaceCast productBlastFurnaceCast = productBlastFurnaceCastService.selectProductBlastFurnaceCastByBlastFurnaceCastId(blastFurnaceCastId);
        mmap.put("productBlastFurnaceCast", productBlastFurnaceCast);
        return prefix + "/edit";
    }

    /**
     * 修改保存出铁时间计控
     */
    @RequiresPermissions("product:blastfurnacecast:edit")
    @Log(title = "出铁时间计控", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(ProductBlastFurnaceCast productBlastFurnaceCast)
    {
        return toAjax(productBlastFurnaceCastService.updateProductBlastFurnaceCast(productBlastFurnaceCast));
    }

    /**
     * 删除出铁时间计控
     */
    @RequiresPermissions("product:blastfurnacecast:remove")
    @Log(title = "出铁时间计控", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(productBlastFurnaceCastService.deleteProductBlastFurnaceCastByBlastFurnaceCastIds(ids));
    }
}
