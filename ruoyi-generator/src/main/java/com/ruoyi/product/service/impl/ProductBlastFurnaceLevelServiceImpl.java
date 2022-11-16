package com.ruoyi.product.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.product.mapper.ProductBlastFurnaceLevelMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceLevel;
import com.ruoyi.product.service.IProductBlastFurnaceLevelService;
import com.ruoyi.common.core.text.Convert;

/**
 * 铁水包液位Service业务层处理
 * 
 * @author zongyoucheng
 * @date 2022-11-24
 */
@Service
public class ProductBlastFurnaceLevelServiceImpl implements IProductBlastFurnaceLevelService 
{
    @Autowired
    private ProductBlastFurnaceLevelMapper productBlastFurnaceLevelMapper;

    /**
     * 查询铁水包液位
     * 
     * @param blastFurnaceLevelId 铁水包液位主键
     * @return 铁水包液位
     */
    @Override
    public ProductBlastFurnaceLevel selectProductBlastFurnaceLevelByBlastFurnaceLevelId(Long blastFurnaceLevelId)
    {
        return productBlastFurnaceLevelMapper.selectProductBlastFurnaceLevelByBlastFurnaceLevelId(blastFurnaceLevelId);
    }

    /**
     * 查询铁水包液位列表
     * 
     * @param productBlastFurnaceLevel 铁水包液位
     * @return 铁水包液位
     */
    @Override
    public List<ProductBlastFurnaceLevel> selectProductBlastFurnaceLevelList(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        return productBlastFurnaceLevelMapper.selectProductBlastFurnaceLevelList(productBlastFurnaceLevel);
    }

    /**
     * 查询铁水包液位列表（大数据专用）
     *
     * @param productBlastFurnaceLevel 铁水包液位
     * @return 铁水包液位
     */
    @Override
    public List<ProductBlastFurnaceLevel> selectProductBlastFurnaceLevelListNew(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        return productBlastFurnaceLevelMapper.selectProductBlastFurnaceLevelListNew(productBlastFurnaceLevel);
    }

    /**
     * 新增铁水包液位
     * 
     * @param productBlastFurnaceLevel 铁水包液位
     * @return 结果
     */
    @Override
    public int insertProductBlastFurnaceLevel(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        return productBlastFurnaceLevelMapper.insertProductBlastFurnaceLevel(productBlastFurnaceLevel);
    }

    /**
     * 修改铁水包液位
     * 
     * @param productBlastFurnaceLevel 铁水包液位
     * @return 结果
     */
    @Override
    public int updateProductBlastFurnaceLevel(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        return productBlastFurnaceLevelMapper.updateProductBlastFurnaceLevel(productBlastFurnaceLevel);
    }

    /**
     * 批量删除铁水包液位
     * 
     * @param blastFurnaceLevelIds 需要删除的铁水包液位主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceLevelByBlastFurnaceLevelIds(String blastFurnaceLevelIds)
    {
        return productBlastFurnaceLevelMapper.deleteProductBlastFurnaceLevelByBlastFurnaceLevelIds(Convert.toStrArray(blastFurnaceLevelIds));
    }

    /**
     * 删除铁水包液位信息
     * 
     * @param blastFurnaceLevelId 铁水包液位主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceLevelByBlastFurnaceLevelId(Long blastFurnaceLevelId)
    {
        return productBlastFurnaceLevelMapper.deleteProductBlastFurnaceLevelByBlastFurnaceLevelId(blastFurnaceLevelId);
    }
}
